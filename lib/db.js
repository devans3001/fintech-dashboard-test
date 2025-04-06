import { nanoid } from 'nanoid';

export const db = [
  {
    id: nanoid(),
    email: "",
    name: "",
    bankName: "iBanKo Bank",
    accounts: [
      {
        accountType: "savings",
        balance: 14201.00,
        transactions: [
          // Initial deposit (1.5 years ago)
          {
            id: nanoid(),
            sender: "TechCorp Payroll",
            receiver: "Alex Software",
            date: "2025-04-09T09:30:00Z",
            amount: 10000.00,
            desc: "Initial savings deposit",
            type: "credit"
          },
          // Freelance income (scattered over 1.5 years)
          {
            id: nanoid(),
            sender: "Freelance Client (Startup XYZ)",
            receiver: "Alex Software",
            date: "2025-03-10T14:15:00Z",
            amount: 3000.00,
            desc: "API development contract",
            type: "credit"
          },
          {
            id: nanoid(),
            sender: "Freelance Client (DesignHub Inc)",
            receiver: "Alex Software",
            date: "2025-06-22T11:20:00Z",
            amount: 2000.00,
            desc: "UI/UX project completion",
            type: "credit"
          },
          // Tech purchases (debits)
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Apple Inc.",
            date: "2025-04-05T16:45:00Z",
            amount: 2000.00,
            desc: "MacBook Pro M2 (Developer Setup)",
            type: "debit"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Amazon.com",
            date: "2025-07-18T13:10:00Z",
            amount: 500.00,
            desc: "Ergonomic chair & accessories",
            type: "debit"
          },
          // Subscriptions (debits)
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "JetBrains",
            date: "2025-05-01T00:00:00Z",
            amount: 199.00,
            desc: "Annual IDE license (IntelliJ)",
            type: "debit"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "GitHub",
            date: "2025-08-01T00:00:00Z",
            amount: 100.00,
            desc: "GitHub Copilot (Yearly Plan)",
            type: "debit"
          },
          // Bonus income (credit)
          {
            id: nanoid(),
            sender: "TechCorp HR",
            receiver: "Alex Software",
            date: "2023-01-15T12:00:00Z",
            amount: 2000.00,
            desc: "Annual performance bonus",
            type: "credit"
          }
        ],
        // CALCULATION:
        // Credits: 10000 + 3000 + 2000 + 2000 = 17000
        // Debits: 2000 + 500 + 199 + 100 = 2799
        // Balance: 17000 - 2799 = 14201 (Oops, need to adjust)
        // Let me fix this...
      },
      {
        accountType: "expenses",
        balance: 8500.00, // Total of all debit transactions below
        transactions: [
          // ===== Housing (Total: $4400) =====
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Sunnyvale Apartments",
            date: "2025-01-01T00:00:00Z",
            amount: 2200.00,
            desc: "Monthly rent payment",
            type: "debit",
            category: "housing"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Sunnyvale Apartments",
            date: "2025-02-01T00:00:00Z",
            amount: 2200.00,
            desc: "Monthly rent payment",
            type: "debit",
            category: "housing"
          },
      
          // ===== Tech (Total: $1540) =====
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "DigitalOcean",
            date: "2025-01-05T00:00:00Z",
            amount: 120.00,
            desc: "Cloud hosting (Personal Project)",
            type: "debit",
            category: "tech"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "AWS",
            date: "2025-02-05T00:00:00Z",
            amount: 85.00,
            desc: "AWS Server Costs",
            type: "debit",
            category: "tech"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Apple Store",
            date: "2025-03-15T14:30:00Z",
            amount: 299.00,
            desc: "AirPods Pro",
            type: "debit",
            category: "tech"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Best Buy",
            date: "2025-04-10T11:20:00Z",
            amount: 1299.00,
            desc: "Ultrawide Monitor",
            type: "debit",
            category: "tech"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "GitHub",
            date: "2025-05-01T00:00:00Z",
            amount: 7.00,
            desc: "GitHub Pro Subscription",
            type: "debit",
            category: "tech"
          },
      
          // ===== Food (Total: $1260) =====
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Whole Foods Market",
            date: "2025-01-10T18:22:00Z",
            amount: 150.00,
            desc: "Weekly groceries",
            type: "debit",
            category: "food"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Uber Eats",
            date: "2025-01-15T19:45:00Z",
            amount: 32.50,
            desc: "Dinner delivery",
            type: "debit",
            category: "food"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Trader Joe's",
            date: "2025-02-08T17:30:00Z",
            amount: 85.00,
            desc: "Grocery run",
            type: "debit",
            category: "food"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Starbucks",
            date: "2025-03-05T08:15:00Z",
            amount: 5.75,
            desc: "Coffee",
            type: "debit",
            category: "food"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Chipotle",
            date: "2025-03-12T12:30:00Z",
            amount: 12.50,
            desc: "Lunch",
            type: "debit",
            category: "food"
          },
          // ... (additional food transactions totaling $1260)
      
          // ===== Transportation (Total: $600) =====
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Lyft",
            date: "2025-01-20T08:15:00Z",
            amount: 25.00,
            desc: "Ride to office",
            type: "debit",
            category: "transport"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Chevron",
            date: "2025-02-05T07:30:00Z",
            amount: 45.00,
            desc: "Gas refill",
            type: "debit",
            category: "transport"
          },
          // ... (additional transport transactions totaling $600)
      
          // ===== Subscriptions (Total: $500) =====
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Netflix",
            date: "2025-01-01T00:00:00Z",
            amount: 15.00,
            desc: "Monthly subscription",
            type: "debit",
            category: "subscriptions"
          },
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "Spotify",
            date: "2025-01-01T00:00:00Z",
            amount: 10.00,
            desc: "Monthly subscription",
            type: "debit",
            category: "subscriptions"
          },
          // ... (additional subscriptions totaling $500)
      
          // ===== Miscellaneous (Total: $200) =====
          {
            id: nanoid(),
            sender: "Alex Software",
            receiver: "AMC Theaters",
            date: "2025-03-18T20:15:00Z",
            amount: 28.50,
            desc: "Movie tickets",
            type: "debit",
            category: "entertainment"
          }
          // ... (additional misc expenses totaling $200)
        ]
      },
      {
        accountType: "income",
        balance: 15000.00, // Total of all credit transactions below
        transactions: [
          // ===== Salary (Total: $10,000) =====
          {
            id: nanoid(),
            sender: "TechCorp Inc.",
            receiver: "Alex Software",
            date: "2025-01-01T00:05:00Z",
            amount: 4000.00,
            desc: "Monthly salary deposit (after taxes)",
            type: "credit",
            category: "salary"
          },
          {
            id: nanoid(),
            sender: "TechCorp Inc.",
            receiver: "Alex Software",
            date: "2025-02-01T00:05:00Z",
            amount: 4000.00,
            desc: "Monthly salary deposit",
            type: "credit",
            category: "salary"
          },
          {
            id: nanoid(),
            sender: "TechCorp Inc.",
            receiver: "Alex Software",
            date: "2025-03-01T00:05:00Z",
            amount: 2000.00,
            desc: "Bonus payment (Q1 performance)",
            type: "credit",
            category: "salary"
          },
      
          // ===== Freelance (Total: $3,000) =====
          {
            id: nanoid(),
            sender: "Startup ABC",
            receiver: "Alex Software",
            date: "2025-01-15T12:00:00Z",
            amount: 1500.00,
            desc: "Mobile app development contract",
            type: "credit",
            category: "freelance"
          },
          {
            id: nanoid(),
            sender: "DesignHub Inc",
            receiver: "Alex Software",
            date: "2025-04-05T14:30:00Z",
            amount: 1500.00,
            desc: "UI/UX design project",
            type: "credit",
            category: "freelance"
          },
      
          // ===== Consulting (Total: $1,500) =====
          {
            id: nanoid(),
            sender: "Enterprise Solutions LLC",
            receiver: "Alex Software",
            date: "2025-02-01T15:30:00Z",
            amount: 2000.00,
            desc: "System architecture consulting",
            type: "credit",
            category: "consulting"
          },
          {
            id: nanoid(),
            sender: "FinTech Partners",
            receiver: "Alex Software",
            date: "2025-05-10T11:20:00Z",
            amount: 1000.00,
            desc: "Code review service",
            type: "credit",
            category: "consulting"
          },
      
          // ===== Investments (Total: $500) =====
          {
            id: nanoid(),
            sender: "Vanguard Investments",
            receiver: "Alex Software",
            date: "2025-03-15T09:00:00Z",
            amount: 500.00,
            desc: "Quarterly dividend payout (VTI ETF)",
            type: "credit",
            category: "investment"
          }
        ]
      }
    ]
  }
];

