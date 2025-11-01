# BoxMap Component

Un componente React interactivo que muestra un mapa mundial real con las ubicaciones de oficinas de AlTOKEN.IO usando imágenes y banderas reales.

## Características

- 🗺️ Mapa mundial con imagen real de alta calidad
- 🏳️ Banderas reales de cada país
- 📍 Marcadores interactivos con tooltips
- ✨ Animaciones suaves con Framer Motion
- 🔗 Líneas de conexión animadas
- 📱 Diseño completamente responsivo
- 🎭 Efectos de hover y click
- ⚡ Optimizado con Next.js Image

## Países Incluidos

- 🇪🇨 **Ecuador** - Quito (28 empleados, est. 2021)
- 🇵🇪 **Perú** - Lima (45 empleados, est. 2020)
- 🇦🇷 **Argentina** - Buenos Aires (38 empleados, est. 2019)
- 🇲🇽 **México** - Ciudad de México (35 empleados, est. 2022)
- 🇨🇴 **Colombia** - Bogotá (32 empleados, est. 2021)

## Uso

```tsx
import { BoxMap } from '@/components/ui/global-maps/global-maps'

function MyComponent() {
  return (
    <div className="w-full">
      <BoxMap />
    </div>
  )
}
```

## Estructura de Archivos Requeridos

El componente requiere las siguientes imágenes en `public/Global-Map/`:

```
public/Global-Map/
├── MAP.webp                    # Mapa mundial base
├── ArgentinaFlag.webp         # Bandera de Argentina
├── ColombiaFlag.webp          # Bandera de Colombia
├── EcuadorFlag.webp           # Bandera de Ecuador
├── MexicoFlag.webp            # Bandera de México
├── PeruFlag.webp              # Bandera de Perú
├── Toltip-Argentina.png       # Tooltip de Argentina
├── Toltip-Colombia.png        # Tooltip de Colombia
├── Toltip-Ecuador.webp        # Tooltip de Ecuador
├── Toltip-Mexico.png          # Tooltip de México
└── Toltip-Peru.webp           # Tooltip de Perú
```

## Características Técnicas

### Responsividad
- **Desktop**: Tamaño completo (782x447px)
- **Tablet**: Escala 90% con ajustes de padding
- **Mobile**: Escala 80% con tooltips más pequeños
- **Small Mobile**: Escala 70% con tooltips compactos

### Animaciones
- Aparición secuencial de marcadores (0.2s delay entre cada uno)
- Líneas de conexión animadas desde el centro
- Efectos de hover con escala 1.1x
- Pulsos en marcadores activos
- Partículas flotantes de fondo

### Interactividad
- Click en cualquier país para mostrar información
- Tooltips con datos de empleados y año de establecimiento
- Estados hover y active con feedback visual
- Accesibilidad con focus states

## Personalización

### CSS Classes Disponibles
```css
.box-map-container     /* Container principal */
.country-marker        /* Marcadores de países */
.country-flag          /* Banderas circulares */
.country-tooltip       /* Tooltips informativos */
.connection-line       /* Líneas de conexión */
.floating-particle     /* Partículas animadas */
```

### Responsive Breakpoints
- `768px`: Tablet adjustments
- `640px`: Small tablet/large mobile
- `480px`: Mobile optimizations

## Integración con Global Presence

El componente se integra perfectamente con la sección `GlobalPresenceSection`:

```tsx
// En global-presence.tsx
<div className="relative w-full flex justify-center items-center rounded-xl overflow-hidden">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 1, delay: 0.5 }}
    className="relative"
  >
    <BoxMap />
  </motion.div>
</div>
```