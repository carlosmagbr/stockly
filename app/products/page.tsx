import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";


const ProductsPage = async () => {
    const products = await getProducts()
    return (
        <div className="w-full my-5 mx-5 pt-2 pb-6 px-8 space-y-8 rounded-lg  bg-white">
            <div className="flex w-full items-center justify-between">
                <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500">
                        Gestão de produtos
                    </span>
                    <h2 className="text-xl font-semibold">Produtos</h2>
                </div>
                <Button className="gap-2">
                    <PlusIcon size={20} />
                    Novo produto
                </Button>
            </div>
            <DataTable
                columns={productTableColumns}
                data={JSON.parse(JSON.stringify(products))}
            />
        </div>
        /* {products.map((product) => (
            <p key={product.id}>{product.name}</p>
        ))} */
    );
}

export default ProductsPage;