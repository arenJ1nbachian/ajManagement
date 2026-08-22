# ajManagement

A full-stack restaurant operations platform built to replace clipboards, paper binders, and group texts with a single digital workspace for managers and staff.

## The Problem

Most small and mid-sized restaurants run their day-to-day operations on paper — CV stacks that end up in the trash, schedules pinned to a wall, releasing or creating many schedules at the same time while keeping the old duplicates, inventory tracked in a notebook, and staff texting managers at 11pm to report something missing or broken, and critical documents buried in chat threads. ajManagement digitizes all of that.

## Features

### For Managers

- **Schedule Management** — define shift templates with seasonal hour overrides, assign employees to shifts, and get notified when staff request swaps
- **Shift Swap Approval** — review and approve or reject employee-initiated shift swaps before they take effect
- **CV Archive** — receive and review job applications submitted online or logged from walk-ins, with status tracking from pending to hired
- **Inventory Tracking** — manage stock levels per location with low-threshold alerts and staff flags
- **Issue Resolution** — receive staff-reported issues and move them through an open → acknowledged → resolved workflow
- **Resource Library** — publish recipes, procedures, and policies for staff to reference
- **Staff Management** — manage employees across multiple locations with role-based access control

### For Employees

- **Schedule Access** — view your own shifts and your colleagues' schedules
- **Shift Swap Requests** — propose a swap with a colleague directly in the app; the manager is notified automatically upon mutual agreement
- **Issue Reporting** — report problems without texting the manager
- **Inventory Flagging** — flag low or incorrect stock items
- **Resource Access** — view recipes, procedures, and policies published by management

## Tech Stack

- **Frontend** — Next.js 15, React, Tailwind CSS, TypeScript
- **Backend** — Next.js API Routes
- **Database** — PostgreSQL
- **ORM** — Prisma
- **Auth** — JWT, role-based access control (manager / employee)

## Data Model

The schema is built around 10 relational tables covering users, locations, scheduling, shift swapping, applications, inventory, issue reporting, and resources. Employees can belong to multiple locations via a junction table. Shifts are defined as reusable templates with seasonal hour overrides, generating concrete daily assignments per employee.

## Project Status

Currently in active development. Scheduling - (Scheduling page and assignments) is complete.

### Roadmap

- [x] Database schema design
- [x] Core models — User, Location, UserLocation
- [x] Operation models - Scheduling, Inventory, Issues, Resources
- [x] Auth — register, login, JWT, role middleware, Auth pages UI
- [ ] Scheduling — templates, seasons, assignments, Scheduling pages UI
- [ ] Shift swapping workflow
- [ ] Application intake
- [ ] Inventory management
- [ ] Issue reporting
- [ ] Resource library

## Future Considerations

- Dynamic enum management (e.g. Position) - replace hardcoded enums types with a manager-defined model per location, allowing each restaurant to define their own roles.
- Ressource document upload with AI analysing, dynamically adding it to the database
- Texting feature and group chats
- Clock in/out with geofencing and managerial override
- Shift-linked task assignment
- Progressive Web App implementation with a possibility for a React Native Version in v2
