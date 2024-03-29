'use client';

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useState } from 'react';

interface Props {}

const menuItems = ['About'];

const Nav: React.FC<Props> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="w-full bg-gray-800 text-white px-[8vw] [&_header]:px-0"
    >
      <NavbarContent className="w-full sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className="w-full sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            Ship Weekly Or Else
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-full hidden sm:flex gap-6" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            Ship Weekly Or Else
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={'foreground'} href={`/${item.toLowerCase()}`} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
