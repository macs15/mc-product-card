# MC-Product-Card

Paquete de prueba de despliegue en NPM

### Maykell Carrillo

## Ejemplo

```tsx
import { 
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'mc-product-card'
```

```tsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 5
  }}
>
  {({ reset }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```