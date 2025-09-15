import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./Tabs.scss";

interface TabItem {
  id: string;
  label: string;
  language: string;
  code: string;
}

interface TabsProps {
  title?: string;
}

export const Tabs = ({ title = "Tabs" }: TabsProps) => {
  const tabs: TabItem[] = [
    {
      id: "javascript",
      label: "JavaScript",
      language: "javascript",
      code: `const numbers = [5, 3, 9, 1, 4];
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log('Original:', numbers);       // [5, 3, 9, 1, 4]
console.log('Sorted:', sortedNumbers);   // [1, 3, 4, 5, 9]
`,
    },
    {
      id: "typescript",
      label: "TypeScript",
      language: "typescript",
      code: `const numbers: readonly number[] = [5, 3, 9, 1, 4];
const sortedNumbers: number[] = [...numbers].sort((a: number, b: number) => a - b);

console.log('Original:', numbers);       // [5, 3, 9, 1, 4]
console.log('Sorted:', sortedNumbers);   // [1, 3, 4, 5, 9]`,
    },
    {
      id: "python",
      label: "Python",
      language: "python",
      code: `numbers = [5, 3, 9, 1, 4]
sorted_numbers = sorted(numbers) 

print(f"Original: {numbers}")        # [5, 3, 9, 1, 4]
print(f"Sorted: {sorted_numbers}")   # [1, 3, 4, 5, 9]`,
    },
    {
      id: "go",
      label: "Go",
      language: "go",
      code: `package main

import (
	"fmt"
	"slices"
)

func main() {
	numbers := []int{5, 3, 9, 1, 4}
	
	sortedNumbers := make([]int, len(numbers))
	copy(sortedNumbers, numbers)
	slices.Sort(sortedNumbers)
	
	fmt.Printf("Original: %v\\n", numbers)       // [5 3 9 1 4]
	fmt.Printf("Sorted: %v\\n", sortedNumbers)  // [1 3 4 5 9]
}`,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs-container">
      <h2 className="section-title">{title}</h2>
      <p className="tabs-description">
        The interactive tabs component lets users switch between different content sections without scrolling. In this example, each tab shows how to perform basic sorting logic in four popular programming languages: 
        <br />
        JavaScript, TypeScript, Python, and Go.
      </p>
      <p>
        
      </p>
      
      <div className="tabs-wrapper">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="tabs-content" role="tabpanel">
          <div className="code-block">
            <div className="code-header">
              <span className="language-label">{activeTabData.language}</span>
              <span className="filename">
                {activeTabData.id === "javascript" && "script.js"}
                {activeTabData.id === "typescript" && "script.ts"}
                {activeTabData.id === "python" && "script.py"}
                {activeTabData.id === "go" && "main.go"}
              </span>
            </div>
            <div className="code-content">
              <SyntaxHighlighter
                language={activeTabData.language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: '#1e1e1e',
                  fontSize: '0.875rem',
                  lineHeight: '1.6',
                  textAlign: 'left',
                }}
                codeTagProps={{
                  style: {
                    fontFamily: "'Fira Code', 'Monaco', 'Courier New', monospace",
                  }
                }}
              >
                {activeTabData.code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};