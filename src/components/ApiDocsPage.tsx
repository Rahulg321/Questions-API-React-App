import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Send, Code, Copy } from 'lucide-react';
import { cn } from '../lib/utils';

interface Endpoint {
  method: 'GET' | 'POST';
  path: string;
  title: string;
  description: string;
  parameters?: {
    name: string;
    type: string;
    description: string;
    required: boolean;
  }[];
  response: string;
}

const endpoints: Endpoint[] = [
  {
    method: 'POST',
    path: '/api/generate-questions',
    title: 'Generate Questions',
    description: 'Create practice test questions for any certification or subject.',
    parameters: [
      {
        name: 'certificationName',
        type: 'string',
        description: 'Name of the certification or subject',
        required: true
      },
      {
        name: 'questionsPerTopic',
        type: 'integer',
        description: 'Number of questions to generate per topic',
        required: true
      },
      {
        name: 'topics',
        type: 'array',
        description: 'List of topics to generate questions for',
        required: true
      }
    ],
    response: `{
  "task_id": "ed971662-d43c-4963-92bc-9f74b723cf11",
  "status": "processing",
  "created_at": "2024-10-25T09:22:07.882081"
}`
  },
  {
    method: 'GET',
    path: '/api/task-status/{task_id}',
    title: 'Get Task Status',
    description: 'Check the status of a question generation task.',
    parameters: [
      {
        name: 'task_id',
        type: 'string',
        description: 'ID of the task to check',
        required: true
      }
    ],
    response: `{
  "status": "completed",
  "result": "NVIDIA-Certified_Associate_AI_Infrastructure.csv",
  "created_at": "2024-10-25T09:22:07.882081",
  "updated_at": "2024-10-25T09:22:57.532838"
}`
  }
];

export default function ApiDocsPage() {
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>(null);
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const handleCopy = async (text: string, endpoint: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search endpoints..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Endpoints */}
        <div className="space-y-4">
          {endpoints.map((endpoint) => (
            <motion.div
              key={endpoint.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              {/* Endpoint Header */}
              <button
                onClick={() => setExpandedEndpoint(
                  expandedEndpoint === endpoint.path ? null : endpoint.path
                )}
                className="w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <span className={cn(
                    "px-2 py-1 rounded text-sm font-medium",
                    endpoint.method === 'GET' 
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-blue-500/10 text-blue-400"
                  )}>
                    {endpoint.method}
                  </span>
                  <code className="text-gray-300 font-mono">{endpoint.path}</code>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-gray-400 transition-transform",
                  expandedEndpoint === endpoint.path ? "transform rotate-180" : ""
                )} />
              </button>

              {/* Endpoint Details */}
              {expandedEndpoint === endpoint.path && (
                <div className="p-4 bg-gray-900 border-t border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {endpoint.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {endpoint.description}
                  </p>

                  {/* Parameters */}
                  {endpoint.parameters && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        Parameters
                      </h4>
                      <div className="bg-gray-800 rounded-lg p-4">
                        {endpoint.parameters.map((param) => (
                          <div key={param.name} className="mb-2 last:mb-0">
                            <div className="flex items-center space-x-2">
                              <code className="text-indigo-400 font-mono">
                                {param.name}
                              </code>
                              <span className="text-gray-500">
                                {param.required ? '(required)' : '(optional)'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                              {param.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Response */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                      Response
                    </h4>
                    <div className="relative">
                      <button
                        onClick={() => handleCopy(endpoint.response, endpoint.path)}
                        className="absolute right-2 top-2 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                      {copiedEndpoint === endpoint.path && (
                        <span className="absolute right-12 top-3 text-xs text-gray-400">
                          Copied!
                        </span>
                      )}
                      <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                        <code className="text-gray-300 font-mono">
                          {endpoint.response}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* Try It */}
                  <div className="mt-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors">
                      <Send className="w-4 h-4" />
                      <span>Try it</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}