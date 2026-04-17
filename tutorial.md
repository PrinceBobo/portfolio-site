# Building a Modern Portfolio Website with AI Chatbot: Complete Beginner's Guide

## Table of Contents
1. [Technology Summary](#technology-summary)
2. [High-Level Architecture](#high-level-architecture)
3. [Detailed Code Review](#detailed-code-review)
4. [Improvement Suggestions](#improvement-suggestions)

---

## Technology Summary

### What We Built
A professional portfolio website featuring Muhammad Usman's career, projects, and skills, with an integrated AI-powered chatbot that can answer questions about his background. The site is fully responsive, stylish, and lightning-fast.

### Core Technologies Explained

#### **Next.js 16** (The Framework)
Next.js is a React framework that makes building web applications easier. Think of it as a structured way to build websites using React components. It provides:
- **Server-Side Rendering (SSR)**: Pages are generated on the server, making them faster and better for search engines
- **API Routes**: Built-in backend endpoints without needing a separate server
- **App Router**: Modern file-based routing system where your folder structure becomes your URL structure

#### **React 19** (The UI Library)
React is a JavaScript library for building interactive user interfaces. It lets you create reusable components (like building blocks) that automatically update when data changes. Key concepts:
- **Components**: Reusable pieces of UI (e.g., Navbar, ContactForm)
- **JSX**: HTML-like syntax in JavaScript files
- **State Management**: React remembers information (like whether a chat box is open)
- **Hooks**: Functions like `useState` and `useEffect` that add functionality to components

#### **TypeScript** (Safer JavaScript)
TypeScript adds "types" to JavaScript, which means you specify what kind of data variables should hold. Benefits:
- Catches errors before running the code
- Makes code more readable and maintainable
- Better developer experience with autocomplete

#### **Tailwind CSS** (Styling)
Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you add pre-made classes directly in your HTML:
```jsx
className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-4 py-2"
// Instead of writing separate CSS for background, hover state, text color, etc.
```

#### **OpenRouter API** (AI Integration)
OpenRouter is a service that provides access to various AI language models (like GPT). In our case, we use it to power the chatbot that responds to questions about Muhammad Usman.

#### **Lucide React** (Icons)
A collection of beautiful, customizable SVG icons used throughout the site (e.g., the chat bubble icon, navigation icons).

---

## High-Level Architecture

### Folder Structure Overview

```
portfolio-site/
├── app/
│   ├── api/chat/route.ts          ← Backend chatbot endpoint
│   ├── layout.tsx                  ← Main layout wrapper
│   ├── page.tsx                    ← Home page
│   ├── about/page.tsx              ← About page
│   ├── contact/page.tsx            ← Contact page
│   └── portfolio/page.tsx           ← Portfolio page
├── components/
│   ├── Navbar.tsx                  ← Navigation component
│   ├── DigitalTwinChat.tsx         ← Chatbot UI component
│   └── ContactForm.tsx             ← Contact form component
├── public/                         ← Static files (images, etc.)
├── app/globals.css                 ← Global styles
├── tailwind.config.ts              ← Tailwind configuration
├── next.config.ts                  ← Next.js configuration
└── tsconfig.json                   ← TypeScript configuration
```

### How Everything Works Together

```
1. USER VISITS WEBSITE
   ↓
2. BROWSER LOADS HTML (from Next.js server)
   ↓
3. REACT MAKES PAGE INTERACTIVE
   ├─ Navbar becomes responsive (opens/closes on mobile)
   ├─ Chat button appears at bottom-right
   └─ All styles applied from Tailwind CSS
   ↓
4. USER CLICKS "ASK ME" BUTTON
   ↓
5. CHAT COMPONENT OPENS (DigitalTwinChat.tsx)
   ├─ Shows greeting message
   ├─ Accepts user input
   └─ Sends message to backend
   ↓
6. MESSAGE SENT TO API (route.ts)
   ├─ Receives message from frontend
   ├─ Adds system prompt (who Usman is)
   ├─ Calls OpenRouter API with full conversation
   └─ Returns AI-generated response
   ↓
7. RESPONSE DISPLAYED IN CHAT
   ├─ Message appears with animation
   ├─ User can continue conversation
   └─ Full context maintained
```

---

## Detailed Code Review

### 1. Backend API Endpoint: `/app/api/chat/route.ts`

This file handles all chatbot conversations. It's a Next.js API route, which means the file path automatically becomes the API endpoint.

#### **Input Validation**
```typescript
export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }
```
**What it does**: 
- Checks that the incoming data has a `messages` array
- Returns error `400 (Bad Request)` if data is invalid
- Using `try/catch` means if anything breaks, we catch the error gracefully

#### **Security Check: API Key**
```typescript
const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  return NextResponse.json(
    { error: 'OpenRouter API key not configured' },
    { status: 500 }
  );
}
```
**What it does**:
- Gets the API key from environment variables (stored securely, not in code)
- Checks if it exists before making API call
- Returns error if key is missing

#### **System Prompt: The Brain**
```typescript
const systemPrompt = `You are a Digital Twin of Muhammad Usman...
[Detailed background information]
IMPORTANT INSTRUCTIONS FOR RESPONSES:
- Keep responses SHORT and CONCISE (2-4 sentences maximum)
- NO markdown formatting
- NO emojis whatsoever
...`;
```
**What it does**:
- Defines the AI's personality and knowledge
- Tells it what to do (be concise, no emojis, etc.)
- Uses Usman's real background, experience, and skills
- This is why the chatbot knows about Usman rather than being a generic AI

#### **Making the API Call**
```typescript
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'HTTP-Referer': 'http://localhost:3000',
    'X-Title': 'Usman Digital Twin',
  },
  body: JSON.stringify({
    model: 'openai/gpt-oss-120b:free',
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,  // Spread previous messages to maintain context
    ],
    temperature: 0.5,
    max_tokens: 300,
  }),
});
```
**What it does**:
- Sends a POST request to OpenRouter's API
- Includes authentication headers
- Passes all previous messages (so AI remembers conversation history)
- `temperature: 0.5` = balanced creativity (0 = predictable, 1 = creative)
- `max_tokens: 300` = AI response limited to ~300 tokens (words)

#### **Returning the Response**
```typescript
if (!response.ok) {
  const error = await response.text();
  console.error('OpenRouter API error:', error);
  return NextResponse.json({ error: 'Failed to get response from OpenRouter' }, 
    { status: response.status });
}

const data = await response.json();
return NextResponse.json({ message: data.choices[0].message.content });
```
**What it does**:
- Checks if the API call succeeded
- Extracts the AI's response from nested data structure
- Returns it as JSON to the frontend
- If error, returns meaningful error message

---

### 2. Frontend Chat Component: `/components/DigitalTwinChat.tsx`

This is the interactive chat widget that appears in the bottom-right corner.

#### **Component Setup with State**
```typescript
'use client';  // This component runs in the browser, not on the server

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function DigitalTwinChat() {
  const [isOpen, setIsOpen] = useState(false);  // Is chat window open?
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! I'm Usman's Digital Twin. Ask me anything...",
    },
  ]);
  const [input, setInput] = useState('');          // Current text being typed
  const [isLoading, setIsLoading] = useState(false); // Is AI thinking?
```
**What it does**:
- `'use client'` = tells Next.js this component needs browser features (React hooks)
- `useState` = remembers information between renders
- `isOpen` = tracks if chat box is visible
- `messages` = array of all messages in the conversation
- `isLoading` = shows loading animation while waiting for AI

#### **Auto-Scroll to Latest Message**
```typescript
const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
};

useEffect(() => {
  scrollToBottom();
}, [messages]);  // Run whenever messages change
```
**What it does**:
- Creates a smooth animations when new message arrives
- `useEffect` = runs code whenever `messages` changes
- The `?` = optional chaining (safe if element doesn't exist)

#### **Sending a Message**
```typescript
const handleSendMessage = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!input.trim()) return;  // Don't send empty messages

  const userMessage = input.trim();
  setInput('');  // Clear input field
  setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
  setIsLoading(true);

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [...messages, { role: 'user', content: userMessage }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response');
    }

    const data = await response.json();
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: data.message },
    ]);
  } catch (error) {
    console.error('Error:', error);
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: "Sorry, I encountered an error. Please check the API key.",
      },
    ]);
  } finally {
    setIsLoading(false);
  }
};
```
**What it does**:
- Adds user message to chat immediately (fast feedback)
- Sends all messages to backend API
- AI responds based on entire conversation history
- Catches errors gracefully
- `finally` = runs whether success or error

#### **Rendering the Chat UI**
```typescript
return (
  <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-24px)] 
                   bg-slate-900 border border-cyan-500/30 rounded-lg...">
    {/* Header with close button */}
    {/* Messages display area with scrolling */}
    {/* Loading animation */}
    {/* Input form */}
  </div>
);
```
**Tailwind Classes Explained**:
- `fixed bottom-6 right-6` = sticky position at bottom-right
- `z-50` = appears on top of everything
- `w-96` = 96 units (384px) wide
- `bg-slate-900` = dark background
- `border border-cyan-500/30` = cyan border with 30% opacity
- `rounded-lg` = slightly rounded corners

---

### 3. Home Page: `/app/page.tsx`

The landing page with hero section and expertise showcase.

#### **Hero Section with Gradient Background**
```typescript
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 
                    rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 
                    rounded-full blur-3xl animate-pulse delay-700" />
  </div>
```
**What it does**:
- Creates decorative blurred circles in the background
- `absolute inset-0` = fills entire section
- `blur-3xl` = heavy blur effect
- `animate-pulse` = fade in/out animation (built into Tailwind)
- `delay-700` = delays animation start

#### **Main Heading**
```typescript
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
  <span className="gradient-text">Muhammad Usman</span>
  <br />
  <span className="text-white">Game Developer &amp; Software Engineer</span>
</h1>
```
**Responsive Design**:
- `text-4xl` = size on small screens
- `md:text-5xl` = larger on medium screens (tablets)
- `lg:text-6xl` = largest on large screens (desktops)
- `gradient-text` = custom CSS class for color gradient

#### **Statistics Section**
```typescript
<div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10">
  <div>
    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
      4+
    </div>
    <div className="text-sm md:text-base text-gray-400">
      Years Experience
    </div>
  </div>
  {/* Repeats for other stats */}
</div>
```
**What it does**:
- Shows key achievements
- `grid-cols-3` = 3 items per row
- Responsive with breakpoints (changes layout on different screen sizes)

---

### 4. Layout Component: `/app/layout.tsx`

Wraps all pages with common HTML structure.

```typescript
export const metadata: Metadata = {
  title: "Muhammad Usman | Portfolio",
  description: "Enterprise meets edgy - Professional portfolio",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <DigitalTwinChat />
        <footer>© 2026 Muhammad Usman.</footer>
      </body>
    </html>
  );
}
```
**What it does**:
- `metadata` = SEO (search engines see title and description)
- `{children}` = placeholder for page-specific content
- `Navbar` and `DigitalTwinChat` = shown on every page
- `flex-1` on main = takes up all available space, pushing footer down

---

### 5. Responsive Navigation: `/components/Navbar.tsx`

Mobile-friendly navigation that collapses on small screens.

```typescript
'use client';

const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

return (
  <nav className="sticky top-0 z-50 border-b border-white/10 
                   bg-black/40 backdrop-blur-md">
    {/* Desktop navigation (hidden on mobile) */}
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} 
              className="text-gray-300 hover:text-cyan-400 transition-colors">
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 
                           group-hover:w-full transition-all duration-300" />
        </Link>
      ))}
    </div>

    {/* Mobile menu button */}
    {isOpen && (
      <div className="md:hidden pb-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}
                onClick={() => setIsOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    )}
  </nav>
);
```
**Mobile-First Design**:
- `hidden md:flex` = hidden on mobile, shown on medium+ screens
- `md:hidden` = shown only on mobile
- Hamburger menu toggles visibility on small screens

---

### 6. Global Styles: `/app/globals.css`

Defines colors, fonts, and base styles.

```css
:root {
  --accent: #00d4ff;           /* Cyan blue */
  --accent-dark: #0099cc;      /* Darker cyan */
  --success: #00ff88;          /* Green */
}

body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  font-family: 'Sora', sans-serif;
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #00d4ff;
  border-radius: 4px;
}
```
**What it does**:
- Sets default colors used throughout (via CSS variables)
- Gradient background for entire page
- Customizes scrollbar styling
- Defines typography defaults

---

## Improvement Suggestions

Based on a comprehensive code review, here are 5 key areas for improvement:

### 1. **Add Error Logging and Monitoring**

**Current Issue**: When the chatbot fails, users only see a generic error message. There's no way to track what's going wrong in production.

**Suggestion**:
```typescript
// Add to route.ts
import * as Sentry from "@sentry/nextjs";  // Or similar service

export async function POST(request: NextRequest) {
  try {
    // ... existing code ...
  } catch (error) {
    Sentry.captureException(error);  // Send to monitoring service
    console.error('Chat API error:', error);
    // This gives insight into production issues without exposing details to users
  }
}
```

**Why**: Production bugs are invisible without logging. You need visibility into what's breaking so you can fix it quickly.

---

### 2. **Implement Rate Limiting**

**Current Issue**: Users can spam unlimited API requests, potentially costing you money or flooding the service.

**Suggestion**:
```typescript
// Create a simple rate limiter
const userRateLimits = new Map();  // In-memory, or use Redis for production

function checkRateLimit(userId: string, maxRequests: number = 10, window: number = 60000) {
  const now = Date.now();
  const userKey = userId;
  
  if (!userRateLimits.has(userKey)) {
    userRateLimits.set(userKey, { requests: 1, resetTime: now + window });
    return true;
  }
  
  const userData = userRateLimits.get(userKey)!;
  if (now > userData.resetTime) {
    userData.requests = 1;
    userData.resetTime = now + window;
    return true;
  }
  
  if (userData.requests < maxRequests) {
    userData.requests++;
    return true;
  }
  
  return false;
}

// In POST handler:
if (!checkRateLimit(request.ip || 'anonymous')) {
  return NextResponse.json(
    { error: 'Too many requests. Please wait before trying again.' },
    { status: 429 }  // 429 = Too Many Requests
  );
}
```

**Why**: Protects your API costs and prevents abuse. With free OpenRouter usage, rate limiting prevents one user from monopolizing your quota.

---

### 3. **Add Message Persistence (Save Chat History)**

**Current Issue**: When users refresh the page, their entire conversation disappears. There's also no way to resume earlier conversations.

**Suggestion**:
```typescript
// Create a new database model (using your preferred DB like Supabase, Firebase, etc.)
// Store messages with:
interface ChatSession {
  id: string;
  userId: string;  // Could be IP for anonymous users
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

// In DigitalTwinChat.tsx:
useEffect(() => {
  // On component mount, fetch previous chat history
  const loadChatHistory = async () => {
    try {
      const response = await fetch('/api/chat/history');
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error('Failed to load history:', error);
    }
  };
  
  loadChatHistory();
}, []);

// Save messages as they're added
useEffect(() => {
  if (messages.length > 1) {  // More than the initial greeting
    fetch('/api/chat/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
  }
}, [messages]);
```

**Why**: Users get a better experience. They can come back and continue previous conversations, and data isn't lost on page refresh.

---

### 4. **Improve TypeScript Types and Validation**

**Current Issue**: While TypeScript is used, the API integration with OpenRouter lacks type safety. The response structure isn't validated, which could cause runtime errors.

**Suggestion**:
```typescript
// Create a types file: lib/types.ts
export interface OpenRouterMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenRouterRequest {
  model: string;
  messages: OpenRouterMessage[];
  temperature: number;
  max_tokens: number;
}

export interface OpenRouterChoice {
  message: {
    content: string;
    role: 'assistant';
  };
}

export interface OpenRouterResponse {
  choices: OpenRouterChoice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// In route.ts, use and validate:
const parsedData: OpenRouterResponse = data;

if (!parsedData.choices?.[0]?.message?.content) {
  throw new Error('Invalid response structure from OpenRouter');
}

// Add validation library (like Zod) for runtime validation:
import { z } from 'zod';

const OpenRouterResponseSchema = z.object({
  choices: z.array(z.object({
    message: z.object({
      content: z.string(),
      role: z.literal('assistant')
    })
  }))
});

const validated = OpenRouterResponseSchema.parse(data);
```

**Why**: Catches bugs at compile-time rather than runtime. Prevents crashes from unexpected API response formats.

---

### 5. **Add Input Sanitization and Content Filtering**

**Current Issue**: User inputs are sent directly to the API without filtering. Users could potentially get inappropriate responses or inject prompts that manipulate the AI.

**Suggestion**:
```typescript
// Create validation: lib/sanitize.ts
import DOMPurify from 'isomorphic-dompurify';

export function sanitizeInput(input: string): string {
  // Remove extra whitespace
  let sanitized = input.trim();
  
  // Remove HTML tags
  sanitized = DOMPurify.sanitize(sanitized, { ALLOWED_TAGS: [] });
  
  // Limit length (prevent token waste)
  const maxLength = 500;
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  // Remove suspicious patterns
  const suspiciousPatterns = [
    /ignore previous instructions/i,
    /forget everything/i,
    /system prompt/i,
  ];
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(sanitized)) {
      throw new Error('Input contains suspicious content');
    }
  }
  
  return sanitized;
}

// In DigitalTwinChat.tsx:
const handleSendMessage = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const sanitized = sanitizeInput(input);
    // ... proceed with sanitized input
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: 'Your message contains suspicious content. Please try again.',
      },
    ]);
    return;
  }
};
```

**Why**: Security best practice. Prevents prompt injection attacks and ensures users see consistent, appropriate responses.

---

## Bonus: Key Learning Points for Beginners

### Component-Based Architecture
Everything is a component. Components are reusable and composable:
```
App
 ├─ Navbar (reusable on all pages)
 ├─ Page Content (specific to each route)
 ├─ DigitalTwinChat (reusable on all pages)
 └─ Footer (reusable on all pages)
```

### Unidirectional Data Flow
Data flows downward, events flow upward:
```
Parent Component (has state)
    ↓ (passes data via props)
Child Component (reads props)
    ↑ (calls callback when event happens)
Parent Component (updates state)
```

### Separation of Concerns
- **Frontend** (`DigitalTwinChat.tsx`): Handles UI and user interaction
- **Backend** (`route.ts`): Handles API calls and business logic
- **Styles** (`globals.css`, Tailwind): Handles appearance

### Environment Variables
Secrets never in code:
```
.env.local (on your computer)
OPENROUTER_API_KEY=sk-...

process.env.OPENROUTER_API_KEY  (accessed in route.ts)
```

---

## Getting Started: What to Do Next

1. **Understand the file structure**: Open each file in `/components` and `/app` directories
2. **Trace the data flow**: Follow a message from the chat input all the way to the API and back
3. **Modify small things**: Change colors, text, or add new pages to get comfortable
4. **Study React fundamentals**: Understand hooks, state, and props deeply
5. **Explore Next.js documentation**: Learn about routing, API routes, and deployment

The best way to learn is by **doing**: make changes, break things, and fix them!

---

*Tutorial created for complete front-end coding beginners. This portfolio showcases modern React patterns, API integration, and responsive design principles.*
