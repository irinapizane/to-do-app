import { Category } from '../models/category.model';

export const categories: Category[] = [
  {
    id: 1,
    title: 'meetings',
    items: 13,
    tasks: [
      {
        id: 1,
        title: 'Schedule weekly team meeting',
        date: new Date(Date.parse('2023-02-01')),
      },
      {
        id: 2,
        title: 'Prepare agenda for client meeting',
        date: new Date(Date.parse('2023-04-20')),
      },
      {
        id: 3,
        title: 'Review meeting minutes',
        date: new Date(Date.parse('2023-05-15')),
      },
      {
        id: 4,
        title: 'Send out meeting invite',
        date: new Date(Date.parse('2023-06-10')),
      },
    ],
  },
  {
    id: 2,
    title: 'birthdays',
    items: 20,
    tasks: [
      {
        id: 1,
        title: 'Send birthday wishes to friends',
        date: new Date(Date.parse('2023-09-01')),
      },
      {
        id: 2,
        title: 'Plan surprise party for spouse',
        date: new Date(Date.parse('2023-08-15')),
      },
      {
        id: 3,
        title: 'Buy gift for family member',
        date: new Date(Date.parse('2023-07-10')),
      },
      {
        id: 4,
        title: 'Send out birthday e-mails',
        date: new Date(Date.parse('2023-06-05')),
      },
    ],
  },
  {
    id: 3,
    title: 'shopping',
    items: 4,
    tasks: [
      {
        id: 1,
        title: 'Grocery shopping for the week',
        date: new Date(Date.parse('2023-05-18')),
      },
      {
        id: 2,
        title: 'Buy new clothes for work',
        date: new Date(Date.parse('2023-04-06')),
      },
      {
        id: 3,
        title: 'Research new home appliances',
        date: new Date(Date.parse('2023-09-07')),
      },
      {
        id: 4,
        title: 'Order takeout from favorite restaurant',
        date: new Date(Date.parse('2023-08-04')),
      },
    ],
  },
  {
    id: 4,
    title: 'parties',
    items: 3,
    tasks: [
      {
        id: 1,
        title: 'Plan holiday office party',
        date: new Date(Date.parse('2023-07-18')),
      },
      {
        id: 2,
        title: 'Organize kids birthday party',
        date: new Date(Date.parse('2023-12-20')),
      },
      {
        id: 3,
        title: 'Rent party equipment',
        date: new Date(Date.parse('2023-09-07')),
      },
    ],
  },
  {
    id: 5,
    title: 'e-mails',
    items: 7,
    tasks: [
      {
        id: 1,
        title: 'Follow up with team members',
        date: new Date(Date.parse('2023-04-15')),
      },
      {
        id: 2,
        title: 'Schedule e-mail marketing campaign',
        date: new Date(Date.parse('2023-07-02')),
      },
    ],
  },
];