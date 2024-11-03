"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/getting-started" },
      { title: "Usage", href: "/docs/usage" },
      { title: "Authentication", href: "/docs/authentication" },
      { title: "Rate Limiting", href: "/docs/rate-limiting" }
    ]
  },
  {
    title: "APIs",
    items: [
      { title: "Users API", href: "/docs/users-api" },
      { title: "Products API", href: "/docs/products-api" },
      { title: "Orders API", href: "/docs/orders-api" },
      { title: "Blog/News API", href: "/docs/news-api" }
    ]
  },
  {
    title: "Legal",
    items: [
      { title: "Privacy Policy", href: "/docs/privacy-policy" },
      { title: "Terms of Service", href: "/docs/terms-of-service" }
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <div className="py-6 pr-4">
      {sidebarItems.map((section, index) => (
        <div key={index} className="mb-6 ml-10">
          <h4 className="mb-2 text-sm font-semibold">{section.title}</h4>
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm hover:bg-accent",
                    pathname === item.href
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-20 z-40 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Desktop Sidebar */}
      <div className="w-64 flex-shrink-0 hidden md:block">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-100 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[280px] bg-background border-r transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <span className="font-semibold">Documentation</span>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-4rem)]">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
