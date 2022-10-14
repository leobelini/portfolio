import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useStateful } from 'react-hanger'
import { useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface ResponseBlob {
  sha: string
  node_id: string
  size: number
  url: string
  content: string
  encoding: 'base64'
}

export const Code = () => {
  const { sha } = useParams()
  const code = useStateful('')

  const getCode = useCallback(async (sha?: string) => {
    code.setValue('')
    if (!sha) return

    const request = await axios.get<ResponseBlob>(
      `https://api.github.com/repos/leobelini/portfolio/git/blobs/${sha}`
    )

    code.setValue(atob(request.data.content))
  }, [])

  useEffect(() => {
    getCode(sha)
  }, [sha])

  return (
    <div className="h-full pl-5 pt-5">
      <SyntaxHighlighter
        //language="javascript"
        customStyle={{
          background: '#09131b',
          height: '100%',
        }}
        style={nightOwl}
        showLineNumbers
      >
        {code.value}
      </SyntaxHighlighter>
    </div>
  )
}
