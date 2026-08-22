import MobPos from '../assets/images/MobPos.png';
import Web1 from '../assets/images/Web1.png';
import Web2 from '../assets/images/Web2.png';
import Comptia from '../assets/images/comptia.png';
import Fortinet from '../assets/images/foritnetnse.png';
import Mern from '../assets/images/MERN.png';

export const projects = [
  { title: 'Mobile POS', category: 'Mobile · Product design', description: 'A mobile point-of-sale concept focused on clear, efficient transaction flows for staff working at speed.', image: MobPos, tags: ['Mobile UI', 'POS workflow', 'Prototyping'], link: 'https://www.canva.com/design/DAGBnsEGHx8/H9c-csZk-CDrvtGeKNTQHA/view?utm_content=DAGBnsEGHx8&utm_campaign=designshare&utm_medium=link&utm_source=editor#4' },
  { title: 'Webkits', category: 'Web · Interface system', description: 'A reusable collection of web interface patterns designed to accelerate consistent product delivery.', image: Web2, tags: ['Web UI', 'Responsive design', 'Components'], link: 'https://www.canva.com/design/DAGBn8-TYVg/g29GtUsjXc1MAcwM8MI41g/view?utm_content=DAGBn8-TYVg&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
  { title: 'Interface Exploration', category: 'Web · Visual development', description: 'An earlier interface study documenting the progression from layout exploration to a polished responsive screen.', image: Web1, tags: ['HTML', 'CSS', 'UI engineering'], link: 'https://github.com/LIMW95' },
];

export const capabilities = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'PHP', 'Java', 'VB.NET', 'REST APIs'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'] },
  { group: 'Delivery', items: ['GitHub', 'Docker', 'Automation', 'API integration'] },
];

export const currentWork = [
  {
    type: 'Public service systems',
    title: '4Ps Platforms',
    role: 'Full-stack Engineer · DSWD',
    status: 'Current',
    description: 'Maintaining and improving digital services supporting the Pantawid Pamilyang Pilipino Program (4Ps), including the established PPIS v3 platform and ongoing work for 4Ps Forward and its Client Self-Service Platform.',
    contributions: ['Legacy system maintenance', 'Full-stack enhancements', 'Service modernization'],
  },
  {
    type: 'Platform integration',
    title: 'Core and Inter-agency APIs',
    role: 'API Engineering · DSWD',
    status: 'Current',
    description: 'Maintaining core program APIs and continuously developing secure service integrations that support coordination across government agencies.',
    contributions: ['API maintenance', 'Integration development', 'Reliability improvements'],
  },
  {
    type: 'Personal product',
    title: 'National Game Project',
    role: 'Creator · Full-stack Developer',
    status: 'In development',
    description: 'An ongoing game project used to deepen hands-on experience with Python, PostgreSQL, gameplay systems, and product iteration.',
    contributions: ['Python', 'PostgreSQL', 'Game systems'],
  },
];

export const engagements = [
  { title: 'Piggery Farm Management System', role: 'Project Manager', description: 'Led the delivery of a private operational system for a piggery farm, coordinating requirements, project execution, and client handover while keeping client and operational details confidential.' },
  { title: 'Workflow Automation', role: 'Developer', description: 'Built practical automation to reduce repetitive work and improve consistency across day-to-day processes.' },
];

export const credentials = [
  { title: 'CompTIA A+', issuer: 'CompTIA', image: Comptia },
  { title: 'Fortinet Training', issuer: 'Fortinet', image: Fortinet },
  { title: 'MERN Stack', issuer: 'Professional training', image: Mern },
];
