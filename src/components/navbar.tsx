"use client";
import {
  ChevronLeft,
  ChevronRight,
  MenuIcon,
  Search,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useIsMobile } from "@/hooks/user-mobile";

export default function Navbar() {
  return (
    <>
      <header className="container flex flex-col py-4">
        <div className="flex items-center justify-between order-2">
          <span className="uppercase text-3xl font-bold">ecommerce</span>
          <nav className="hidden lg:flex">
            <ul className="flex place-content-center gap-3">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/#">Categories</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#">sales</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#">Clearance</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#"> New stock</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#">Trending</Link>
                </Button>
              </li>
            </ul>
          </nav>

          <div className="space-x-3">
            <Button variant="ghost" size="icon" className="">
              <Search className="h-10 w-10" />
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingCartIcon className="size-5" />
            </Button>

            <MobileDrawer />
          </div>
        </div>

        <div className="order-1 self-end -space-x-2 mb-2">
          <Button variant="link" asChild>
            <Link href="#">Help</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#"> Orders & Returns</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#">Hi, John </Link>
          </Button>
        </div>
      </header>
      <article className="bg-secondary flex gap-5 items-center justify-center py-2 text-sm">
        <ChevronLeft className="size-5" />
        <h2>Get 10% off on business sign up</h2>
        <ChevronRight className="size-5" />
      </article>
    </>
  );
}

export function MobileDrawer() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="size-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left px-5">
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
          </DrawerHeader>
          <ul className="flex flex-col place-content-center gap-3">
            <li>
              <Link className={buttonVariants({ variant: "ghost" })} href="#">
                Categories
              </Link>
            </li>
            <li>
              <Link className={buttonVariants({ variant: "ghost" })} href="#">
                Sales
              </Link>
            </li>
            <li>
              <Link className={buttonVariants({ variant: "ghost" })} href="#">
                Clearance
              </Link>
            </li>
            <li>
              <Link className={buttonVariants({ variant: "ghost" })} href="#">
                New stock
              </Link>
            </li>
            <li>
              <Link className={buttonVariants({ variant: "ghost" })} href="#">
                Trending
              </Link>
            </li>
          </ul>
          <DrawerFooter className="pt-2">
            {/* <LoginOrLogoutButton /> */}
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
}
