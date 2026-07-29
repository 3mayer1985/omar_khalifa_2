export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 text-center text-[0.88rem] text-text-muted">
      <div className="mx-auto max-w-[980px] px-6">
        <p>&copy; {year} Omar Khalifa. All rights reserved.</p>
      </div>
    </footer>
  );
}
