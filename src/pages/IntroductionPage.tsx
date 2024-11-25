import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Rocket, Code, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const sections = [
  {
    id: "overview",
    icon: Sparkles,
    title: "Overview",
    content: `Our mission is to make course creation accessible and delightful for educators.

We provide a simple REST API, which delivers AI-powered course generation, including:

- Practice test questions
- Course content generation
- Student engagement analytics
- Performance tracking
- Content optimization
- Export capabilities

We support 30,000+ topics, going back across all major certification providers.

Our platform is perfect for building online courses, practice test platforms, learning management systems, educational tools, and more.`,
  },
  {
    id: "getting-started",
    icon: Rocket,
    title: "Getting Started",
    content: `To get started with our API, you'll need:

1. Create an account and obtain your API key
2. Choose your course topic or certification
3. Make your first API call
4. Export generated content to your platform`,
  },
  {
    id: "examples",
    icon: Code,
    title: "Examples",
    content: null,
    codeExample: {
      title: "Generate Practice Test Questions",
      description:
        "Here's how to generate practice test questions using our API:",
      code: `const response = await fetch('https://api.coursegen.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    certification: "AWS Solutions Architect",
    questionsCount: 5,
    topics: ["EC2", "S3", "VPC"]
  })
});

const result = await response.json();
const taskId = result.task_id;

// Check task status
const statusResponse = await fetch(\`https://api.coursegen.ai/v1/status/\${taskId}\`, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const status = await statusResponse.json();
console.log(\`Task status: \${status.status}\`);`,
    },
  },
];

export default function IntroductionPage() {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="flex">
        {/* Main content */}
        <div className="flex-1 max-w-[calc(100%-256px)] px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-invert max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">Introduction</h1>
              <p className="text-xl text-gray-400 mb-12">
                Welcome to Course Generator API, a developer-friendly course
                creation platform.
              </p>
            </motion.div>

            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                  <section.icon className="w-6 h-6 text-indigo-400" />
                  {section.title}
                </h2>

                {section.content && (
                  <div className="text-gray-300 space-y-4">
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <div key={i}>
                        {paragraph.startsWith("-") ? (
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            {paragraph.split("\n").map((item, j) => (
                              <li key={j}>{item.replace("- ", "")}</li>
                            ))}
                          </ul>
                        ) : paragraph.match(/^\d\./) ? (
                          <ol className="list-decimal list-inside space-y-2 ml-4">
                            {paragraph.split("\n").map((item, j) => (
                              <li key={j}>{item.replace(/^\d\.\s/, "")}</li>
                            ))}
                          </ol>
                        ) : (
                          <p>{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.codeExample && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white mb-2">
                      {section.codeExample.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {section.codeExample.description}
                    </p>
                    <div className="relative group">
                      <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-50 blur transition duration-1000 group-hover:duration-200" />
                      <div className="relative">
                        <div className="absolute right-4 top-4 z-10">
                          <button
                            onClick={() =>
                              handleCopyCode(section.codeExample.code)
                            }
                            className={cn(
                              "p-2 rounded-lg transition-colors",
                              copiedCode
                                ? "bg-green-500/20 text-green-400"
                                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                            )}
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <pre className="relative bg-gray-900/75 backdrop-blur-sm rounded-lg p-6 overflow-x-auto border border-gray-800">
                          <code className="text-gray-300 text-sm">
                            {section.codeExample.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </motion.section>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-64 fixed right-0 top-16 bottom-0 overflow-y-auto border-l border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6">
          <div className="sticky top-6">
            <h3 className="text-sm font-medium text-gray-400 mb-4">
              On this page
            </h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-1"
                >
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
