import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6">
      <p className="text-center text-lg text-white">
        Site developed with <i className="i-fa6-solid-heart text-red-600"></i>{" "}
        by{" "}
        <Link
          href="https://github.com/definedentity"
          target="_blank"
          className="text-violet-500"
        >
          DefinedEntity
        </Link>
      </p>
    </footer>
  );
}
