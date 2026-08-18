import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert, Loader2 } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="destructive">
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle>Errors!</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(([key, value]) => (
                                        <li key={key}>{value as string}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="gap-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                        {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="price">Price</Label>
                        <Input type="number" id="price" name="price" value={data.price} onChange={(e) => setData('price', e.target.value)} />
                        {errors.price && <div className="text-sm text-red-500">{errors.price}</div>}
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Description"
                        />
                        {errors.description && <div className="text-sm text-red-500">{errors.description}</div>}
                    </div>
                    <div>
                        <Button type="submit" disabled={processing}>
                            {processing ? (
                                <div className="flex animate-pulse items-center gap-2">
                                    <Loader2 className="size-4.5 animate-spin" />
                                    Adding...
                                </div>
                            ) : (
                                'Add Product'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
