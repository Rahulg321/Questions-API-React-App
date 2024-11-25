import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShineBorder } from './magicui/shine-border';
import { ResizableColumn } from './csv/ResizableColumn';
import { columns, sampleData } from './csv/data';
import { FileJson, Sparkles } from 'lucide-react';

export default function CsvViewer() {
  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>(
    Object.fromEntries(columns.map(col => [col, 300]))
  );

  const handleColumnResize = (column: string, width: number) => {
    setColumnWidths(prev => ({
      ...prev,
      [column]: width
    }));
  };

  return (
    <section className="relative bg-gray-900 pt-4 pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(99,102,241,0.05)_0deg,transparent_60deg,transparent_300deg,rgba(99,102,241,0.05)_360deg)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6"
          >
            <FileJson className="w-4 h-4" />
            <span>Sample API Response</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="inline-flex animate-gradient-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent">
              Generated Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Here's what you'll get when you use our API - professionally crafted practice test questions with detailed explanations
          </motion.p>
        </motion.div>

        <ShineBorder
          borderRadius={16}
          borderWidth={1}
          duration={8}
          color={["#4f46e5", "#7c3aed", "#2563eb"]}
          className="w-full min-w-full p-0 bg-transparent"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm px-6 py-4 border-b border-indigo-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    NVIDIA Certified Associate: AI Infrastructure and Operations
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Practice Test Questions CSV Format
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-gray-800/50">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm">
                      {columns.map((column, index) => (
                        <th
                          key={index}
                          className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-r border-indigo-500/20 whitespace-nowrap"
                        >
                          <ResizableColumn
                            width={columnWidths[column]}
                            onResize={(width) => handleColumnResize(column, width)}
                          >
                            <div className="px-6 py-4">{column}</div>
                          </ResizableColumn>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800/30 backdrop-blur-sm">
                    {sampleData.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="hover:bg-indigo-500/5 transition-colors duration-150"
                      >
                        {columns.map((column, colIndex) => (
                          <td
                            key={`${rowIndex}-${colIndex}`}
                            className="border-b border-r border-indigo-500/20 group"
                          >
                            <div
                              className="px-6 py-6 text-sm text-gray-300 group-hover:text-white transition-colors"
                              style={{
                                width: `${columnWidths[column]}px`,
                                minWidth: `${columnWidths[column]}px`,
                                maxWidth: `${columnWidths[column]}px`,
                                overflowWrap: 'break-word'
                              }}
                            >
                              {row[column as keyof typeof row]}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </ShineBorder>
      </div>
    </section>
  );
}