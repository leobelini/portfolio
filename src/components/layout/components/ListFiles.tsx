import { BsChevronDown } from 'react-icons/bs'
import { AiTwotoneFolderOpen, AiTwotoneFolder } from 'react-icons/ai'
import React, { useCallback, useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { IdeContext } from '../IdeContext'
import { useArray, useBoolean, useStateful } from 'react-hanger'
import axios from 'axios'
import { FaReact } from 'react-icons/fa'
import { IsTrue } from '../../isTrue'

interface TypeTree {
  path: string
  mode: string
  type: 'blob' | 'tree'
  sha: string
  size: number
  url: string
}

interface TypeResponseFiles {
  sha: string
  url: string
  tree: TypeTree[]
}

interface TypeTreeRefactor {
  name: string
  prev?: string
  isFolder: boolean
}

export const ListFiles: React.FC = () => {
  const { currentPath } = useContext(IdeContext)

  const files = useArray<{ name: string; prev?: string; isFolder: boolean }>([])

  const loadFiles = useCallback(async () => {
    const response = await axios.get<TypeResponseFiles>(
      `https://api.github.com/repos/leobelini/portfolio/git/trees/main?recursive=1`
    )

    const tree = response.data.tree.reduce<any>((prev, current) => {
      const isFolder = current.type === 'tree'
      const currentPath = current.path.split('/').slice(0, -1)
      const file = current.path.split('/').pop()

      return [
        ...prev,
        {
          name: file,
          prev: currentPath[currentPath.length - 1],
          isFolder,
        },
      ].filter((p) => p)
    }, [])

    files.setValue(tree)
  }, [])

  const activePath = useCallback(
    (currentValue: string) => {
      if (currentValue === currentPath) return `bg-dark-gunmetal font-semibold`
      return ``
    },
    [currentPath]
  )

  useEffect(() => {
    loadFiles()
  }, [])

  return (
    <div className="pt-1 overflow-auto pb-10">
      <RenderFolders fileList={files.value} />
    </div>
  )
}

const RenderFolders: React.FC<{
  fileList: TypeTreeRefactor[]
  currentPath?: string
}> = ({ fileList, currentPath }) => {
  const isOpen = useBoolean(false)
  return (
    <ul>
      {fileList
        .filter((p) => p.isFolder && p.prev === currentPath)
        .map((path) => (
          <React.Fragment key={path.name}>
            <li className="py-1 pl-4  hover:bg-dark-jungle-green">
              <button
                className="flex items-center w-full"
                onClick={isOpen.toggle}
              >
                <AiTwotoneFolder className="mr-2" />
                {path.name}
              </button>
            </li>

            <IsTrue isTrue={isOpen.value}>
              <li className="py-1 pl-4">
                <RenderFolders fileList={fileList} currentPath={path.name} />
              </li>
            </IsTrue>
          </React.Fragment>
        ))}

      {fileList
        .filter((p) => !p.isFolder && p.prev === currentPath)
        .map((file) => (
          <li className="py-1 pl-4  hover:bg-dark-jungle-green" key={file.name}>
            <span className="flex items-center">
              <FaReact className="mr-2" />
              {file.name}
            </span>
          </li>
        ))}
    </ul>
  )
}
