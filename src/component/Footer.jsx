import React from "react";

function Footer() {
  return (
    <footer class="bg-black text-white py-5 text-center">
      <div class="mb-5 space-x-4">
        <a href="index.php" class="text-white hover:text-gray-300">
          Home
        </a>
        <a href="about.php" class="text-white hover:text-gray-300">
          About
        </a>
        <a href="contact.php" class="text-white hover:text-gray-300">
          Contact Us
        </a>
      </div>
      <div class="text-sm text-gray-400">This is my test project in React!</div>
    </footer>
  );
}

export default Footer;
