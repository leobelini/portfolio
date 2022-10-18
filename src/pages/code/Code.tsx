import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useStateful } from 'react-hanger'
import { useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const imageExtensions = [`jpeg`, `jpg`, `png`, `ico`]

interface ResponseBlob {
  sha: string
  node_id: string
  size: number
  url: string
  content: string
  encoding: 'base64'
}

export const Code = () => {
  const { sha, extension } = useParams<{ sha: string; extension: string }>()
  const code = useStateful('')

  const getCode = useCallback(async (sha?: string) => {
    code.setValue('')
    if (!sha) return

    const request = await axios.get<ResponseBlob>(
      `https://api.github.com/repos/leobelini/portfolio/git/blobs/${sha}`
    )
    code.setValue(request.data.content)
  }, [])

  useEffect(() => {
    getCode(sha)
  }, [sha])

  return (
    <div className="h-full pl-5 pt-5">
      {imageExtensions.includes(extension || ``) && (
        <div className={`flex items-center justify-center`}>
          <img src={`data:image/${extension};base64, ${code.value}`} />
        </div>
      )}
      {!imageExtensions.includes(extension || ``) && (
        <SyntaxHighlighter
          customStyle={{
            background: '#09131b',
            height: '100%',
          }}
          style={nightOwl}
          showLineNumbers
        >
          {atob(code.value)}
        </SyntaxHighlighter>
      )}
    </div>
  )
}
