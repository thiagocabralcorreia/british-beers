export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-secondary">Test</h1>
      <div>{children}</div>
    </div>
  );
}
