"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandInput,
  CommandList
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  // Tambahkan tipe untuk NavLink
  const NavLink = ({
    href,
    children,
    onClick
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "text-sm font-medium transition-all duration-300 ease-in-out",
          "relative py-1 px-1",
          "hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {children}
        <span
          className={cn(
            "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left",
            "transition-all duration-300 ease-out",
            isActive ? "scale-x-100" : "scale-x-0",
            "group-hover:scale-x-100"
          )}
        />
        <span
          className={cn(
            "absolute inset-0 bg-primary/10 rounded-md transform origin-left",
            "transition-all duration-300 ease-out scale-x-0 scale-y-0",
            "hover:scale-x-100 hover:scale-y-100"
          )}
        />
      </Link>
    );
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">Dizi</span>
                <Link
                  href="#"
                  className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
                >
                  OpenApi
                </Link>
              </Link>
              <div className="hidden md:flex gap-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/docs">Documentation</NavLink>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 px-0 transition-all duration-200 ease-in-out hover:scale-110"
                onClick={() => setOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 px-0 transition-all duration-200 ease-in-out hover:scale-110"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden transition-all duration-200 ease-in-out hover:scale-110"
                onClick={() => setShowMobileMenu(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300",
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMobileMenu(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[280px] bg-background border-l transition-transform duration-300 ease-in-out",
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <span className="font-semibold">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMobileMenu(false)}
            className="transition-all duration-200 ease-in-out hover:scale-110"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="py-4">
          <div className="flex flex-col space-y-3 px-6">
            <NavLink href="/" onClick={() => setShowMobileMenu(false)}>
              Home
            </NavLink>
            <NavLink href="/docs" onClick={() => setShowMobileMenu(false)}>
              Documentation
            </NavLink>
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Links">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.location.href = "/docs/getting-started";
              }}
            >
              Getting Started
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.location.href = "/docs/authentication";
              }}
            >
              Authentication
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="APIs">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.location.href = "/docs/users-api";
              }}
            >
              Users API
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.location.href = "/docs/products-api";
              }}
            >
              Products API
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
