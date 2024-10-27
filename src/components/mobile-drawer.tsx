"use client";
import { useIsMobile } from "@/hooks/user-mobile";
import { MenuIcon } from "lucide-react";
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
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
}
