const courses = [
    {
        id: 1,
        title: "Personal Finance & Money Management",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
        description: "Master the essentials of personal finance and develop strong money management skills.",
        chapters: [
            {
                title: "Budgeting Basics",
                content: [
                    { type: "article", title: "Understanding Budget Components", completed: false },
                    { type: "video", title: "Creating Your First Budget", completed: false },
                    { type: "assignment", title: "Build Your Monthly Budget", completed: false }
                ]
            },
            {
                title: "Saving Strategies",
                content: [
                    { type: "article", title: "Emergency Fund Essentials", completed: false },
                    { type: "video", title: "Smart Saving Techniques", completed: false },
                    { type: "assignment", title: "Create Saving Goals", completed: false }
                ]
            }
        ],
        duration: "4 weeks",
        rating: 4.5,
        enrolled: 1250,
        testimonials: [
            { user: "John D.", text: "Transformed my financial habits completely!" },
            { user: "Sarah M.", text: "Great introduction to personal finance!" }
        ]
    },
    {
        id: 2,
        title: "Real Estate & Property Investment",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        description: "Learn the fundamentals of real estate investing and property market analysis.",
        chapters: [
            {
                title: "Real Estate Fundamentals",
                content: [
                    { type: "article", title: "Property Markets 101", completed: false },
                    { type: "video", title: "Understanding Property Values", completed: false },
                    { type: "assignment", title: "Market Analysis Exercise", completed: false }
                ]
            }
        ],
        duration: "6 weeks",
        rating: 4.7,
        enrolled: 980,
        testimonials: [
            { user: "Mike R.", text: "Great introduction to real estate investing!" }
        ]
    },
    {
        id: 3,
        title: "Cryptocurrency & Blockchain",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800",
        description: "Explore the world of digital currencies and blockchain technology.",
        chapters: [
            {
                title: "Crypto Basics",
                content: [
                    { type: "article", title: "Introduction to Blockchain", completed: false },
                    { type: "video", title: "Understanding Cryptocurrencies", completed: false },
                    { type: "assignment", title: "Create Your First Wallet", completed: false }
                ]
            }
        ],
        duration: "5 weeks",
        rating: 4.6,
        enrolled: 2100,
        testimonials: [
            { user: "Alex K.", text: "Clear explanation of complex concepts!" }
        ]
    },
    {
        id: 4,
        title: "Stock Market Investing",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
        description: "Master stock market basics and advanced trading strategies.",
        chapters: [
            {
                title: "Stock Market Fundamentals",
                content: [
                    { type: "article", title: "Understanding Stocks", completed: false },
                    { type: "video", title: "Technical Analysis Basics", completed: false },
                    { type: "assignment", title: "Create Investment Plan", completed: false }
                ]
            }
        ],
        duration: "8 weeks",
        rating: 4.8,
        enrolled: 1800,
        testimonials: [
            { user: "Emily W.", text: "Excellent course for beginners!" }
        ]
    },
    {
        id: 5,
        title: "Tax Planning & Strategy",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        description: "Learn effective tax planning strategies and maximize your returns.",
        chapters: [
            {
                title: "Tax Basics",
                content: [
                    { type: "article", title: "Understanding Tax Systems", completed: false },
                    { type: "video", title: "Tax Saving Strategies", completed: false },
                    { type: "assignment", title: "Create Tax Plan", completed: false }
                ]
            }
        ],
        duration: "4 weeks",
        rating: 4.7,
        enrolled: 1500,
        testimonials: [
            { user: "David L.", text: "Very helpful for tax planning!" }
        ]
    },
    {
        id: 6,
        title: "Retirement Planning",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800",
        description: "Plan your retirement effectively with proven strategies.",
        chapters: [
            {
                title: "Retirement Basics",
                content: [
                    { type: "article", title: "Understanding Retirement Plans", completed: false },
                    { type: "video", title: "Investment Strategies", completed: false },
                    { type: "assignment", title: "Create Retirement Plan", completed: false }
                ]
            }
        ],
        duration: "6 weeks",
        rating: 4.9,
        enrolled: 2200,
        testimonials: [
            { user: "Susan M.", text: "Essential knowledge for everyone!" }
        ]
    }
];
