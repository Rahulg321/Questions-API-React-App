import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
  Code,
  FileJson,
  Sparkles,
  Rocket,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CreateApiKeyPage from "./endpoints/CreateApiKeyPage";
import GenerateQuestionsPage from "./endpoints/GenerateQuestionsPage";
import GetTaskStatusPage from "./endpoints/GetTaskStatusPage";
import DownloadCsvPage from "./endpoints/DownloadCsvPage";
import IntroductionPage from "./IntroductionPage";

interface NavItem {
  label: string;
  icon: any;
  href?: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    label: "Get Started",
    icon: Rocket,
    children: [
      {
        label: "Introduction",
        icon: Sparkles,
        href: "/api/introduction",
      },
    ],
  },
  {
    label: "Endpoints",
    icon: FileJson,
    children: [
      {
        label: "Create API Key",
        icon: Code,
        href: "/api/create-api-key",
      },
      {
        label: "Generate Questions",
        icon: Code,
        href: "/api/generate-questions",
      },
      {
        label: "Get Task Status",
        icon: Code,
        href: "/api/task-status",
      },
      {
        label: "Download CSV",
        icon: Code,
        href: "/api/download-csv",
      },
    ],
  },
];

// Helper function to flatten navigation items for search
const flattenNavigation = (items: NavItem[]): NavItem[] => {
  return items.reduce((acc: NavItem[], item) => {
    if (item.children) {
      return [...acc, ...flattenNavigation(item.children)];
    }
    return [...acc, item];
  }, []);
};

// Helper function to check if a navigation item matches the search query
const itemMatchesSearch = (item: NavItem, searchQuery: string): boolean => {
  const query = searchQuery.toLowerCase();
  return item.label.toLowerCase().includes(query);
};

// Helper function to find parent sections that have matching children
const findParentsWithMatchingChildren = (
  items: NavItem[],
  searchQuery: string
): string[] => {
  return items.reduce((acc: string[], item) => {
    if (
      item.children &&
      item.children.some((child) => itemMatchesSearch(child, searchQuery))
    ) {
      return [...acc, item.label];
    }
    return acc;
  }, []);
};

function ApiDocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(
    navigation.map((item) => item.label)
  );

  // Filter navigation items based on search query
  const filteredNavigation = useMemo(() => {
    if (!searchQuery.trim()) return navigation;

    const parentsWithMatchingChildren = findParentsWithMatchingChildren(
      navigation,
      searchQuery
    );

    return navigation
      .map((section) => ({
        ...section,
        children: section.children?.filter((item) =>
          itemMatchesSearch(item, searchQuery)
        ),
      }))
      .filter(
        (section) =>
          itemMatchesSearch(section, searchQuery) ||
          (section.children && section.children.length > 0)
      );
  }, [searchQuery]);

  // Automatically expand sections with matching items
  useEffect(() => {
    if (searchQuery.trim()) {
      const parentsWithMatches = findParentsWithMatchingChildren(
        navigation,
        searchQuery
      );
      setExpandedItems((prev) => [
        ...new Set([...prev, ...parentsWithMatches]),
      ]);
    }
  }, [searchQuery]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const NavItem = ({ item }: { item: NavItem }) => {
    const isExpanded = expandedItems.includes(item.label);
    const isActive = item.href === location.pathname;
    const Icon = item.icon;

    return (
      <div>
        <div
          className={cn(
            "flex items-center px-3 py-2 rounded-lg text-sm transition-colors",
            item.href ? "cursor-pointer" : "cursor-default",
            isActive
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          )}
          onClick={() => {
            if (item.children) {
              toggleExpand(item.label);
            }
          }}
        >
          {item.href ? (
            <Link to={item.href} className="flex items-center flex-1">
              <Icon className="w-4 h-4 mr-2" />
              <span>{item.label}</span>
            </Link>
          ) : (
            <>
              <Icon className="w-4 h-4 mr-2" />
              <span className="flex-1">{item.label}</span>
              {item.children && (
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isExpanded ? "transform rotate-180" : ""
                  )}
                />
              )}
            </>
          )}
        </div>

        {isExpanded && item.children && (
          <div className="ml-4 mt-1 space-y-1">
            {item.children.map((child, index) => (
              <NavItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Left sidebar */}
      <div className="fixed left-0 top-16 bottom-0 w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <nav className="px-2 space-y-1">
          {filteredNavigation.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64">
        <Routes>
          <Route path="introduction" element={<IntroductionPage />} />
          <Route path="create-api-key" element={<CreateApiKeyPage />} />
          <Route
            path="generate-questions"
            element={<GenerateQuestionsPage />}
          />
          <Route path="task-status" element={<GetTaskStatusPage />} />
          <Route path="download-csv" element={<DownloadCsvPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default ApiDocsPage;
