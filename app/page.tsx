import Image from "next/image";
import ProductTable from "./components/productTable/ProductTable";

export default function Home() {
  return (
    <main className="dark:bg-[var(--bg-dark-blue)]">
      <ProductTable />       
    </main>
  );
}
