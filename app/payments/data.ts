import { Payment } from "./column";

// A utility to generate random emails and statuses for more varied data.
const firstNames = ["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Evelyn", "Alexander", "Harper"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson"];
const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"];
const statuses: ("success" | "pending" | "failed" | "processing")[] = ["success", "pending", "failed", "processing"];

const generateRandomRecord = (): Payment => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 100)}@${domains[Math.floor(Math.random() * domains.length)]}`;
  
  return {
    id: crypto.randomUUID().slice(0, 8),
    amount: Math.floor(Math.random() * (500 - 10 + 1)) + 10,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    email: email,
  };
};

export async function getData(): Promise<Payment[]> {
  const data: Payment[] = [];
  for (let i = 0; i < 35; i++) {
    data.push(generateRandomRecord());
  }
  return data;
}