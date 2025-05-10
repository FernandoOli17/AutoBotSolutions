"use client"

import { useEffect, useRef } from "react"

export function Terminal() {
  const terminalRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const terminalCode = ["def automacao():", '    print("Hello, world! 🚀")', "automacao()"]

    if (terminalRef.current) {
      typeTerminal(terminalCode, terminalRef.current)
    }
  }, [])

  const typeTerminal = (lines: string[], el: HTMLElement, charSpeed = 40, lineDelay = 500) => {
    let i = 0

    function typeLine() {
      if (i < lines.length) {
        let line = ""
        let j = 0

        function typeChar() {
          if (j < lines[i].length) {
            line += lines[i][j]
            // Atualiza apenas a linha atual, mantendo as anteriores
            const prev = el.innerHTML.split("\n").slice(0, i).join("\n")
            el.innerHTML = (prev ? prev + "\n" : "") + line + '<span class="terminal-cursor">|</span>'
            j++
            setTimeout(typeChar, charSpeed)
          } else {
            // Linha completa, adiciona quebra de linha
            const prev = el.innerHTML.split("\n").slice(0, i).join("\n")
            el.innerHTML = (prev ? prev + "\n" : "") + lines[i] + '\n<span class="terminal-cursor">|</span>'
            i++
            setTimeout(typeLine, lineDelay)
          }
        }

        typeChar()
      } else {
        // Remove cursor da última linha e adiciona cursor piscando
        const allLines = lines.join("\n")
        el.innerHTML = allLines + '\n<span class="terminal-cursor blink">|</span>'
      }
    }

    el.innerHTML = ""
    typeLine()
  }

  return (
    <div className="w-full max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden border border-gray-800 shadow-lg">
      <div className="flex items-center bg-gray-900 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-400">python automation.py</div>
      </div>
      <pre
        ref={terminalRef}
        className="bg-gray-950 text-emerald-200 p-4 font-mono text-sm h-[120px] overflow-hidden"
      ></pre>
    </div>
  )
}
