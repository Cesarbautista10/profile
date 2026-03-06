# Despliegue en GitHub Pages 🚀

## Configuración Completada

He configurado el despliegue automático a GitHub Pages usando GitHub Actions:

### 📁 Archivos Creados

1. **`.github/workflows/deploy.yml`** - Workflow de GitHub Actions
2. **`docs/public/.nojekyll`** - Archivo para evitar procesamiento de Jekyll

### ⚙️ Configuración del Workflow

El workflow se ejecuta automáticamente cuando:
- Haces push a la rama `main`
- Lo ejecutas manualmente desde GitHub Actions

### 📋 Pasos para Completar el Despliegue

#### 1. **Configura GitHub Pages en tu repositorio:**
   - Ve a: `Settings` → `Pages`
   - En **Source**, selecciona: `GitHub Actions`

#### 2. **Sube tus cambios a GitHub:**
   ```bash
   cd /media/mr/firmware/github-mx/web_sites/profile
   git add .
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

#### 3. **Verifica el despliegue:**
   - Ve a la pestaña `Actions` en tu repositorio
   - Observa el progreso del workflow
   - Una vez completado, tu sitio estará en:
     `https://cesarbautista10.github.io/profile/`

### 🔧 Comandos Útiles

```bash
# Desarrollo local
cd docs
npm run dev

# Build de producción (local)
cd docs
npm run build

# Preview del build
cd docs
npm run preview
```

### ✅ Características del Workflow

- ✨ Build automático en cada push
- 📦 Optimización de dependencias con npm ci
- 🚀 Despliegue directo a GitHub Pages
- 🔒 Permisos de seguridad configurados
- ♻️ Cancelación automática de builds anteriores

### 🌐 URL de tu sitio

Una vez desplegado, tu perfil estará disponible en:
**https://cesarbautista10.github.io/profile/**

¡Todo listo para desplegar! Solo necesitas hacer push a GitHub. 🎉
