import { Client } from "@prisma/client";

export const clients = [
  { id: "c1", email: "client1@gmail.com", name: "Client 1" },
  { id: "c2", email: "client2@gmail.com", name: "Client 2" },
  { id: "c3", email: "client3@gmail.com", name: "Client 3" },
];

export const employees = [
  {
    id: "e1",
    email: "employee1@gmail.com",
    name: "Employee 1",
  },
  {
    id: "e2",
    email: "emploee2@gmail.com",
    name: "Employee 2",
  },
  {
    id: "e3",
    email: "emploee3@gmail.com",
    name: "Employee 3",
  },
];

export const customers = ["Customer 1", "Customer 2", "Customer 3"];

export async function getData(): Promise<Client[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "client 1",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      name: "client 2",
      email: "b@example.com",
    },
    {
      id: "728ed52h",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52he",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52w",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52hq",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52]",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52[",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52p",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52o",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52i",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52u",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52/",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52.",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52,",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52m",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52n",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52b",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52v",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52c",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52x",
      name: "client 3",
      email: "c@example.com",
    },
    {
      id: "728ed52z",
      name: "client 3",
      email: "c@example.com",
    },
  ];
}
