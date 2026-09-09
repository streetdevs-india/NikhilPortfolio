import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-8">
      <div className="container-x flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {contact.name}. All rights reserved.
        </p>
        <p className="font-script text-2xl text-green">{contact.name}</p>
      </div>
    </footer>
  );
}
