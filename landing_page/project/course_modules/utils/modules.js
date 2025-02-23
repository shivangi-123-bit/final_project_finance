const MODULES_DATA = [
  {
    id: 1,
    title: "📌 Module 1: Introduction to Financial Education",
    items: [
      {
        type: "video",
        title: "What is Financial Literacy?",
        url: "https://www.youtube.com/watch?v=example1"
      },
      {
        type: "article",
        title: "Importance of Financial Education",
        url: "https://example.com/article1"
      },
      {
        type: "article",
        title: "Key Concepts in Finance",
        url: "https://example.com/article2"
      }
    ]
  },
  {
    id: 2,
    title: "📌 Module 2: Budgeting & Money Management",
    items: [
      {
        type: "video",
        title: "Understanding Income & Expenses",
        url: "https://www.youtube.com/watch?v=example2"
      },
      {
        type: "article",
        title: "How to Create a Budget",
        url: "https://example.com/article3"
      },
      {
        type: "article",
        title: "Savings vs. Spending",
        url: "https://example.com/article4"
      }
    ]
  },
  {
    id: 3,
    title: "📌 Module 3: Banking & Financial Accounts",
    items: [
      {
        type: "video",
        title: "Types of Bank Accounts (Savings, Checking, FD, RD)",
        url: "https://www.youtube.com/watch?v=example3"
      },
      {
        type: "article",
        title: "How to Use Online Banking & UPI",
        url: "https://example.com/article5"
      },
      {
        type: "article",
        title: "Understanding Interest Rates",
        url: "https://example.com/article6"
      }
    ]
  },
  {
    id: 4,
    title: "📌 Module 4: Credit & Debt Management",
    items: [
      {
        type: "video",
        title: "What is Credit Score?",
        url: "https://www.youtube.com/watch?v=example4"
      },
      {
        type: "article",
        title: "Loans & EMIs Explained",
        url: "https://example.com/article7"
      },
      {
        type: "article",
        title: "How to Avoid Debt Traps",
        url: "https://example.com/article8"
      }
    ]
  },
  {
    id: 5,
    title: "📌 Module 5: Taxation Basics",
    items: [
      {
        type: "video",
        title: "Introduction to Taxes",
        url: "https://www.youtube.com/watch?v=example5"
      },
      {
        type: "article",
        title: "Types of Taxes (Income Tax, GST, Property Tax)",
        url: "https://example.com/article9"
      },
      {
        type: "article",
        title: "How to File Taxes",
        url: "https://example.com/article10"
      }
    ]
  },
  {
    id: 6,
    title: "📌 Module 6: Insurance & Risk Management",
    items: [
      {
        type: "video",
        title: "Importance of Insurance",
        url: "https://www.youtube.com/watch?v=example6"
      },
      {
        type: "article",
        title: "Types of Insurance (Health, Life, Vehicle, Property)",
        url: "https://example.com/article11"
      },
      {
        type: "article",
        title: "Understanding Premiums & Claims",
        url: "https://example.com/article12"
      }
    ]
  },
  {
    id: 7,
    title: "📌 Module 7: Investment Basics",
    items: [
      {
        type: "video",
        title: "Introduction to Investing",
        url: "https://www.youtube.com/watch?v=example7"
      },
      {
        type: "article",
        title: "Stocks, Mutual Funds & Bonds Explained",
        url: "https://example.com/article13"
      },
      {
        type: "article",
        title: "Risk vs. Return in Investments",
        url: "https://example.com/article14"
      }
    ]
  },
  {
    id: 8,
    title: "📌 Module 8: Stock Market Fundamentals",
    items: [
      {
        type: "video",
        title: "How Stock Markets Work",
        url: "https://www.youtube.com/watch?v=example8"
      },
      {
        type: "article",
        title: "Understanding Market Trends & Indicators",
        url: "https://example.com/article15"
      },
      {
        type: "article",
        title: "Basics of Trading & Investing",
        url: "https://example.com/article16"
      }
    ]
  },
  {
    id: 9,
    title: "📌 Module 9: Mutual Funds & SIPs",
    items: [
      {
        type: "video",
        title: "What are Mutual Funds?",
        url: "https://www.youtube.com/watch?v=example9"
      },
      {
        type: "article",
        title: "Systematic Investment Plans (SIP) Explained",
        url: "https://example.com/article17"
      },
      {
        type: "article",
        title: "How to Select the Right Mutual Fund",
        url: "https://example.com/article18"
      }
    ]
  },
  {
    id: 10,
    title: "📌 Module 10: Personal Finance & Wealth Building",
    items: [
      {
        type: "video",
        title: "Setting Financial Goals",
        url: "https://www.youtube.com/watch?v=example10"
      },
      {
        type: "article",
        title: "Strategies for Wealth Creation",
        url: "https://example.com/article19"
      },
      {
        type: "article",
        title: "Financial Planning for Different Life Stages",
        url: "https://example.com/article20"
      }
    ]
  },
  {
    id: 11,
    title: "📌 Module 11: Retirement Planning",
    items: [
      {
        type: "video",
        title: "Why Retirement Planning is Important",
        url: "https://www.youtube.com/watch?v=example11"
      },
      {
        type: "article",
        title: "How to Build a Retirement Fund",
        url: "https://example.com/article21"
      },
      {
        type: "article",
        title: "Pension Schemes & Investment Options",
        url: "https://example.com/article22"
      }
    ]
  },
  {
    id: 12,
    title: "📌 Module 12: Understanding Inflation & Economy",
    items: [
      {
        type: "video",
        title: "What is Inflation?",
        url: "https://www.youtube.com/watch?v=example12"
      },
      {
        type: "article",
        title: "How Inflation Affects Your Money",
        url: "https://example.com/article23"
      },
      {
        type: "article",
        title: "Basics of GDP & Economic Growth",
        url: "https://example.com/article24"
      }
    ]
  },
  {
    id: 13,
    title: "📌 Module 13: Digital Payments & FinTech",
    items: [
      {
        type: "video",
        title: "UPI, Credit Cards, and Digital Wallets",
        url: "https://www.youtube.com/watch?v=example13"
      },
      {
        type: "article",
        title: "Cybersecurity in Online Transactions",
        url: "https://example.com/article25"
      },
      {
        type: "article",
        title: "How FinTech is Changing Finance",
        url: "https://example.com/article26"
      }
    ]
  },
  {
    id: 14,
    title: "📌 Module 14: Real Estate & Property Investment",
    items: [
      {
        type: "video",
        title: "Basics of Real Estate Investment",
        url: "https://www.youtube.com/watch?v=example14"
      },
      {
        type: "article",
        title: "Renting vs. Buying Property",
        url: "https://example.com/article27"
      },
      {
        type: "article",
        title: "Risks & Benefits of Real Estate Investment",
        url: "https://example.com/article28"
      }
    ]
  },
  {
    id: 15,
    title: "📌 Module 15: Understanding Cryptocurrency & Blockchain",
    items: [
      {
        type: "video",
        title: "What is Cryptocurrency?",
        url: "https://www.youtube.com/watch?v=example15"
      },
      {
        type: "article",
        title: "How Blockchain Works",
        url: "https://example.com/article29"
      },
      {
        type: "article",
        title: "Risks & Future of Crypto Investments",
        url: "https://example.com/article30"
      }
    ]
  },
  {
    id: 16,
    title: "📌 Module 16: Financial Scams & Fraud Prevention",
    items: [
      {
        type: "video",
        title: "Common Financial Scams",
        url: "https://www.youtube.com/watch?v=example16"
      },
      {
        type: "article",
        title: "How to Identify & Avoid Scams",
        url: "https://example.com/article31"
      },
      {
        type: "article",
        title: "Cybersecurity Best Practices",
        url: "https://example.com/article32"
      }
    ]
  },
  {
    id: 17,
    title: "📌 Module 17: Tax Saving Strategies",
    items: [
      {
        type: "video",
        title: "How to Legally Save Taxes",
        url: "https://www.youtube.com/watch?v=example17"
      },
      {
        type: "article",
        title: "Best Tax Saving Investment Options",
        url: "https://example.com/article33"
      },
      {
        type: "article",
        title: "Understanding Tax Exemptions & Deductions",
        url: "https://example.com/article34"
      }
    ]
  },
  {
    id: 18,
    title: "📌 Module 18: Entrepreneurship & Business Finance",
    items: [
      {
        type: "video",
        title: "Basics of Starting a Business",
        url: "https://www.youtube.com/watch?v=example18"
      },
      {
        type: "article",
        title: "Managing Business Finances",
        url: "https://example.com/article35"
      },
      {
        type: "article",
        title: "How to Raise Funds for Your Startup",
        url: "https://example.com/article36"
      }
    ]
  },
  {
    id: 19,
    title: "📌 Module 19: Emergency Funds & Crisis Management",
    items: [
      {
        type: "video",
        title: "Importance of an Emergency Fund",
        url: "https://www.youtube.com/watch?v=example19"
      },
      {
        type: "article",
        title: "How to Build & Manage an Emergency Fund",
        url: "https://example.com/article37"
      },
      {
        type: "article",
        title: "Financial Planning During a Crisis",
        url: "https://example.com/article38"
      }
    ]
  },
  {
    id: 20,
    title: "📌 Module 20: Financial Freedom & Smart Money Habits",
    items: [
      {
        type: "video",
        title: "Steps to Achieve Financial Independence",
        url: "https://www.youtube.com/watch?v=example20"
      },
      {
        type: "article",
        title: "Smart Money Habits for a Secure Future",
        url: "https://example.com/article39"
      },
      {
        type: "article",
        title: "How to Stay Consistent with Your Financial Goals",
        url: "https://example.com/article40"
      }
    ]
  }
];

function useModules() {
  const [modules, setModules] = React.useState(MODULES_DATA);
  const [progress, setProgress] = React.useState({});

  const calculateProgress = () => {
    try {
      const totalItems = modules.reduce((acc, module) => acc + module.items.length, 0);
      const completedItems = Object.values(progress).filter(value => value).length;
      return Math.round((completedItems / totalItems) * 100);
    } catch (error) {
      reportError(error);
      return 0;
    }
  };

  const toggleCompletion = (moduleId, itemIndex) => {
    try {
      setProgress(prev => {
        const key = `${moduleId}-${itemIndex}`;
        const newProgress = { ...prev, [key]: !prev[key] };
        localStorage.setItem('progress', JSON.stringify(newProgress));
        return newProgress;
      });
    } catch (error) {
      reportError(error);
    }
  };

  React.useEffect(() => {
    try {
      const savedProgress = JSON.parse(localStorage.getItem('progress')) || {};
      setProgress(savedProgress);
    } catch (error) {
      reportError(error);
    }
  }, []);

  return { modules, progress, toggleCompletion, calculateProgress };
}
