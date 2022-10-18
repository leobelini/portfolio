import { AiTwotoneFolder, AiTwotoneFolderOpen } from 'react-icons/ai'
import axios from 'axios'
import React, { useCallback, useContext, useEffect } from 'react'

import { IdeContext } from '../IdeContext'
import { useArray, useBoolean } from 'react-hanger'
import { FaReact } from 'react-icons/fa'
import { IsTrue } from '../../isTrue'
import { Link } from 'react-router-dom'

const removedFiles = ['.pdf']

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
  sha: string
  prev?: string
  isFolder: boolean
}

export const FileList: React.FC = () => {
  const files = useArray<TypeTreeRefactor>([])

  const loadFiles = useCallback(async () => {
    const response = await axios.get<TypeResponseFiles>(
      `https://api.github.com/repos/leobelini/portfolio/git/trees/main?recursive=1`
    )

    const tree = response.data.tree.reduce<any>((prev, current) => {
      const isFolder: boolean = current.type === 'tree'
      const currentPath: string[] = current.path.split('/').slice(0, -1)
      const file: string | undefined = current.path.split('/').pop()

      return [
        ...prev,
        {
          sha: current.sha,
          name: file,
          prev: currentPath[currentPath.length - 1],
          isFolder,
        },
      ].filter((p) => p)
    }, [])

    files.setValue(tree)
  }, [])

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
  const getExtension = useCallback((path: string) => {
    return path.split('.').pop()
  }, [])

  return (
    <ul>
      {fileList
        .filter((p) => p.isFolder && p.prev === currentPath)
        .map((path) => (
          <Folder currentFolder={path} fileList={fileList} key={path.name} />
        ))}

      {fileList
        .filter((p) => !p.isFolder && p.prev === currentPath)
        .filter(
          (p) =>
            !removedFiles.some((a) =>
              p.name.toUpperCase().includes(a.toUpperCase())
            )
        )
        .map((file) => (
          <li
            className={`py-1 pl-4 hover:bg-dark-jungle-green`}
            key={file.name}
          >
            <Link
              className="flex items-center"
              to={`/code/${getExtension(file.name)}/${file.sha}`}
              title={file.name}
            >
              <FaReact className="mr-2" />
              {file.name}
            </Link>
          </li>
        ))}
    </ul>
  )
}

const Folder: React.FC<{
  fileList: TypeTreeRefactor[]
  currentFolder: TypeTreeRefactor
}> = ({ fileList, currentFolder }) => {
  const isOpen = useBoolean(false)
  return (
    <ul>
      <li className="py-1 pl-4  hover:bg-dark-jungle-green">
        <button className="flex items-center w-full" onClick={isOpen.toggle}>
          {isOpen.value ? (
            <AiTwotoneFolderOpen className="mr-2" />
          ) : (
            <AiTwotoneFolder className="mr-2" />
          )}
          {currentFolder.name}
        </button>
      </li>

      <IsTrue isTrue={isOpen.value}>
        <li className="py-1 pl-4">
          <RenderFolders fileList={fileList} currentPath={currentFolder.name} />
        </li>
      </IsTrue>
    </ul>
  )
}
