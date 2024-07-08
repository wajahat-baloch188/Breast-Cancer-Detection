"use client";
import React, { useState } from "react";

import {
  Box,
  Flex,
  Center,
  Text,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import styles from "../../myStyles.module.css";
// import { useRouter } from "next/router";

// Navigation links
const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/shop", label: "SHOP" },
  { href: "/contact-us", label: "CONTACT US" },
  { href: "/blogs", label: "BLOGS" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="px-4 md:px-10 bg-white text-black">
      {/* Main Navbar */}
      <nav className="bg-white px-4 py-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Center>
            <Link
              href="/"
              className="hover:no-underline flex justify-center items-center"
            >
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={40}
                height={36}
              />
              <Text
                className={`font-black text-[6vw] md:text-[24px] ${styles.heading}`}
              >
                Breast Cancer
              </Text>
            </Link>
          </Center>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-[30px] items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative mx-2 text-[12px] lg:text-[15px] hover:after:w-full hover:after:left-0 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-pink-500 after:transition-width after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-2 md:gap-4">
            <Link
              href="/signIn"
              className="bg-pink-500 py-2 px-4 rounded-lg text-white"
            >
              Sign In
            </Link>
            <Link
              href="/signUp"
              className="bg-pink-500 py-2 px-4 rounded-lg text-white"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="block md:hidden">
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              onClick={onOpen}
              className=" text-2xl"
              bg="transparent"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="sm">
        <DrawerOverlay />
        <DrawerContent className="bg-white  px-8 pt-4">
          <DrawerHeader className="border-b pb-2">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={35}
                  height={30}
                />
                <Text className={`font-bold text-xl ${styles.heading}`}>
                  Ethereal Elegance
                </Text>
              </div>

              <IconButton
                icon={<CloseIcon />}
                aria-label="Close Menu"
                onClick={onClose}
                className=" text-xl"
              />
            </div>
          </DrawerHeader>
          <DrawerBody>
            <List className="space-y-4 mt-8">
              {links.map((link) => (
                <ListItem key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="relative mr-4 text-[20px] hover:after:w-full hover:after:left-0 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-pink-500 after:transition-width after:duration-300"
                  >
                    {link.label}
                  </Link>
                </ListItem>
              ))}
            </List>
            <div className="mt-9 flex flex-col space-y-4">
              <Link href="./auth/login" passHref>
                <a className="w-full bg-pink-500 py-3 text-lg rounded-lg text-white text-center flex justify-center">
                  Login
                </a>
              </Link>
              <Link href="./auth/register" passHref>
                <a className="w-full bg-pink-500 py-3 text-lg rounded-lg text-white text-center flex justify-center">
                  Sign Up
                </a>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
