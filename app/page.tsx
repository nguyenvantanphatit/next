import ProductsPage from './products/page';
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
      <ProductsPage />
    </div>
  );
}