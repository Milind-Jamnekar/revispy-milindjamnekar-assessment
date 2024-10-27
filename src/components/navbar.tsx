import { logout } from "@/lib/action";
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Search,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { auth } from "../../auth";
import { MobileDrawer } from "./mobile-drawer";
import { Button } from "./ui/button";

export default async function Navbar() {
  const session = await auth();

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
              <span className="sr-only">Search button</span>
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingCartIcon className="size-5" />
              <span className="sr-only">Cart button</span>
            </Button>

            {session && (
              <form action={logout}>
                <Button variant="destructive" size="icon">
                  <LogOut className="w-6" />
                </Button>
              </form>
            )}

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
