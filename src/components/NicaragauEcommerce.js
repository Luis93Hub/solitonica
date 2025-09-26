'use client';
import React, { useState, useEffect} from 'react';
import { ShoppingCart, X, Plus, Facebook, Instagram, Minus, Globe, Menu, ArrowBigDown, Sparkles } from 'lucide-react';
import Image from 'next/image';


// ================================
// COMPONENTE HEADER
// ================================
const Header = ({ language, setLanguage, cart, setIsCartOpen, texts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 z-50">
            <a href="#" className="flex items-center group">
              <div className="relative">
                <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-amber-600 to-white-700 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                  <Image
                    src={'/images/logo.png'}
                    alt='logo'
                    width={58}
                    height={58}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-stone-300/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-lg lg:text-xl font-bold text-black group-hover:text-amber-800 transition-colors duration-300">
                {texts.brand}
              </span>
            </a>
          </div>

          {/* Center title - Hidden on mobile */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-stone-800 via-amber-800 to-stone-800 bg-clip-text text-transparent tracking-wide">
              MODA NICARAGÜENSE
            </h1>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language and Cart - Desktop */}
            <div className="hidden sm:flex items-center space-x-3">
              <LanguageSwitcher 
                language={language} 
                setLanguage={setLanguage} 
              />
              
              <CartIcon 
                cartItemsCount={cartItemsCount} 
                setIsCartOpen={setIsCartOpen} 
              />
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 text-stone-700 hover:text-black hover:bg-white/50 rounded-full transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-stone-200/50 py-4 bg-[#E2D7C5]/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl font-bold text-center bg-gradient-to-r from-stone-800 via-amber-800 to-stone-800 bg-clip-text text-transparent">
                MODA NICARAGÜENSE
              </h1>
              
              <div className="flex items-center justify-center space-x-6">
                <LanguageSwitcher 
                  language={language} 
                  setLanguage={setLanguage} 
                />
                
                <CartIcon 
                  cartItemsCount={cartItemsCount} 
                  setIsCartOpen={setIsCartOpen} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// ================================
// COMPONENTE LANGUAGE SWITCHER
// ================================
const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="flex items-center space-x-2 px-4 py-2 text-stone-700 hover:text-black rounded-full hover:bg-white/50 transition-all duration-300 font-semibold border border-transparent hover:border-stone-300"
    >
      <Globe className="w-4 h-4"/>
      <span>{language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};

// ================================
// COMPONENTE CART ICON
// ================================
const CartIcon = ({ cartItemsCount, setIsCartOpen }) => {
  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-stone-700 hover:text-black hover:bg-white/50 rounded-full transition-all duration-300 border border-transparent hover:border-stone-300"
    >
      <ShoppingCart className="w-6 h-6"/>
      {cartItemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {cartItemsCount}
        </span>
      )}
    </button>
  );
};

// ================================
// COMPONENTE HERO SECTION
// ================================
const HeroSection = ({ texts }) => {

  // ================================
// COMPONENTE HERO SECTION CON CARRUSEL DE IMÁGENES
// ================================
  // Array de imágenes para el carrusel
  const heroImages = [
    '/images/t-shirt/camisa-blanca-letras-negras-logo-solitonica-nicaragua.png',
    '/images/t-shirt/camisa-negra-letras-blancas-logo-solitonica-nicaragua.png',
    '/images/t-shirt/Christian/camisa-negra-letras-blancas-overside-jesús-solitonica-nicaragua.png',
    '/images/t-shirt/Christian/camisa-negra-letras-blancas-overside-frase-isaías-4:31-solitonica-nicaragua.png',
    '/images/t-shirt/camisa-blanca-letras-negras-chiva-esa-nota-solitonica-nicaragua-carrusel.png',
    '/images/t-shirt/camisa-negra-letras-blancas-chiva-esa-nota-solitonica-nicaragua-carrusel.png'
  ];

  // Estado para controlar qué imagen se muestra
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect para cambiar la imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 3000); // Cambia cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-stone-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-amber-300/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-stone-300/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto min-h-[calc(100vh-7.5rem)] mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 flex flex-col lg:flex-row items-center justify-between text-black gap-4 md:my-8 relative">

        {/* Text content */}
        <div className="space-y-6 flex-3 text-center lg:text-left relative">
          {/* Background text decoration */}
          <div className="absolute -top-4 -left-4 text-stone-200/20 text-8xl font-bold select-none pointer-events-none">
            Nica
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight relative z-10">
            <span className="block text-black relative">
              {texts.hero.title.split(' ').slice(0, 2).join(' ')},
              {/* Underline animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-stone-400 group-hover:w-full transition-all duration-1000 ease-out"></div>
            </span> 
            <span className="block mx-4 bg-gradient-to-r from-stone-800 via-amber-800 to-stone-800 bg-clip-text text-transparent relative animate-gradient bg-300% bg-gradient-to-r from-stone-800 via-amber-600 via-amber-800 via-stone-600 to-stone-800">
              {texts.hero.title.split(' ').slice(2).join(' ')}
              {/* Sparkle effect */}
              <Sparkles className="inline-block w-6 h-6 ml-2 text-amber-500/60 animate-pulse" />
            </span>
          </h1>
          
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed relative">
            <span className="relative inline-block">
              {texts.hero.subtitle}
              {/* Highlight effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/50 to-transparent scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left -z-10"></span>
            </span>
          </h2>
          
          <div className="pt-4">
            <button 
              onClick={scrollToProducts}
              className="inline-block group"
            >
              <div className="relative overflow-hidden border-2 border-black text-black px-6 py-4 font-semibold text-lg hover:text-white transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px] rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
                {/* Button background animation */}
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10">{texts.hero.cta}</span>
                <ArrowBigDown className="relative z-10 w-5 h-5 group-hover:translate-y-1 group-hover:rotate-12 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
        
        {/* Image with enhanced effects */}
        <div className="flex-1 flex justify-center lg:justify-end max-w-sm lg:max-w-lg xl:max-w-xl relative">
          <div className="relative group">
            {/* Multiple glow layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-stone-100/30 rounded-3xl blur-2xl scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-stone-200/20 rounded-3xl blur-3xl scale-125 opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
            
            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              ¡Nuevo!
            </div>
            {/* Indicadores del carrusel */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-amber-600 w-6' 
                      : 'bg-stone-400 hover:bg-amber-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Main image container */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-stone-200/50 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Border gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 via-stone-200/50 to-amber-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              
              <div className="relative z-10 w-full h-64 bg-gradient-to-br from-stone-600 to-amber-700 rounded-2xl group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110 flex items-center justify-center text-white font-bold text-lg">
                <div className=" text-gray-800 p-4 text-center">
                  <div className='transition-opacity duration-1000 ease-in-out'>
                    <Image
                      src={heroImages[currentImageIndex]}
                        width={180}
                        height={180}
                      alt={`camiseta ${currentImageIndex + 1}`}
                    />
                  </div>
                </div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent rounded-b-2xl pointer-events-none"></div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg animate-pulse opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full shadow-lg animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer" onClick={scrollToProducts}>
        <div className="w-4 h-6 lg:w-5 lg:h-8 border-2 border-stone-400/50 group-hover:border-amber-500/70 rounded-full flex justify-center transition-colors duration-300 bg-white/30 backdrop-blur-sm">
          <div className="w-0.5 h-1.5 lg:w-1 lg:h-2 bg-stone-600/60 group-hover:bg-amber-500/80 rounded-full mt-1 animate-pulse transition-colors duration-300"></div>
        </div>
        <div className="text-xs text-stone-500 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll
        </div>
      </div>
    </section>
  );
};

// ================================
// FILTERS COMPONENT
// ================================
const ProductFilters = ({ selectedFilters, setSelectedFilters, texts }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {Object.entries(texts.products.filters).map(([key, label]) => (
        <button
          key={key}
          onClick={() => setSelectedFilters({...selectedFilters, style: key})}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
            selectedFilters.style === key
              ? 'bg-stone-800 text-white border-stone-800 transform scale-105'
              : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-800 hover:text-white hover:border-stone-800'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

// ================================
// FUNCTION TO OBTAIN PRICE PER MATERIAL
// ================================
const getProductPrice = (product, selectedMaterial) => {
  // If you have specific prices per material, use that price
  if(product.materialPrices && product.materialPrices[selectedMaterial]) {
    return product.materialPrices[selectedMaterial];
  }
  // If you don't have specific prices, use the base price or the default price.
  return product.baseprice || product.price || 0;
}

// ================================
// PRODUCT CARD COMPONENT
// ================================
const ProductCard = ({ product, language, texts, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);

  // Function to obtain the image according to the selected color
  const getProductImage = () => {
    if(product.colorImages && product.colorImages[selectedColor]) {
      return product.colorImages[selectedColor];
    }
    // If not, use the main image
    return product.image;
  }

  // Get dynamic price based on selected material
  const currentPrice = getProductPrice(product, selectedMaterial);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-stone-200/50 group">
      {/* Product preview */}
      <ProductPreview 
        phrase={product.phrase}
        selectedColor={selectedColor}
        productImage={getProductImage()}
      />

      <div className="p-6">
        <ProductInfo 
          product={product}
          language={language}
        />

        <ProductOptions 
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedMaterial={selectedMaterial}
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
          setSelectedMaterial={setSelectedMaterial}
          texts={texts}
          currentPrice={currentPrice}
        />

        <ProductActions 
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedMaterial={selectedMaterial}
          onAddToCart={onAddToCart}
          texts={texts}
          currentPrice={currentPrice}
        />
      </div>
    </div>
  );
};

// ================================
// COMPONENTE VISTA PREVIA DEL PRODUCTO
// ================================
const ProductPreview = ({ phrase, selectedColor, productImage }) => {
  const getBgColor = (color) => {
    if (color === '#FFFFFF') return '#f8f9fa';
    if (color === '#000000') return '#1a1a1a';
    if (color === '#003366') return '#003366';
    if (color === '#2E7D32') return '#2E7D32';
    {/* #f8f9fa */}
    return color;
  };

  return (
    <div 
      className="h-64 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      {/* Product of Image */}
      {productImage ? (
        <div className='relative w-full h-full'>
          <Image
            src={productImage}
            alt={phrase}
            fill
            className='object-cover object-center'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay con la frase */}
          <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
            <div className='bg-white/95 text-gray-800 p-4 rounded-xl shadow-xl max-w-[80%] text-center backdrop-blur-sm border border-stone-200/50'>
              <div className='text-sm font-bold'>{phrase}</div>
            </div>
          </div>
        </div>
      ) : (
        // Fallback if not image
    <div className='h-full flex items-center justify-center text-white font-bold text-lg relative'
      style={{ backgroundColor: getBgColor(selectedColor) }}
    >
      <div className="bg-white/95 text-gray-800 p-4 rounded-xl shadow-xl max-w-[80%] text-center backdrop-blur-sm border border-stone-200/50">
        <div className="text-sm font-bold">{phrase}</div>
      </div>
    </div>
    )}
      <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white/80 shadow-lg z-10" 
            style={{ backgroundColor: selectedColor }}></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </div>
  );
};

// ================================
// COMPONENTE INFO DEL PRODUCTO
// ================================
const ProductInfo = ({ product, language }) => {
  return (
    <>
      <h3 className="text-xl font-semibold text-stone-800 mb-2">
        {product.name[language]}
      </h3>
      <p className="text-stone-600 text-sm mb-4">
        {product.description[language]}
      </p>
    </>
  );
};

// ================================
// COMPONENTE OPCIONES DEL PRODUCTO
// ================================
const ProductOptions = ({ 
  product, 
  selectedColor, 
  selectedSize, 
  selectedMaterial,
  setSelectedColor,
  setSelectedSize,
  setSelectedMaterial,
  texts,
  currentPrice
}) => {
  return (
    <div className="space-y-4 mb-6">
      {/* Selector de color */}
      <div>
        <label className="block text-sm font-semibold text-stone-800 mb-2">
          {texts.products.color}
        </label>
        <ColorSelector 
          colors={product.colors}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
      </div>

      {/* Selector de talla */}
      <div>
        <label className="block text-sm font-semibold text-stone-800 mb-2">
          {texts.products.size}
        </label>
        <SizeSelector 
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
        />
      </div>

      {/* Selector de material */}
      <div>
        <label className="block text-sm font-semibold text-stone-800 mb-2">
          {texts.products.material}
        </label>
        <MaterialSelector 
          product={product}
          materials={product.materials}
          selectedMaterial={selectedMaterial}
          onMaterialSelect={setSelectedMaterial}
        />
      </div>

      {/* Mostrar precio actual */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-stone-700">
            Precio para {selectedMaterial}:
          </span>
          <span className="text-lg font-bold text-amber-700">
            ${currentPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

// ================================
// COMPONENTE SELECTOR DE COLOR
// ================================
const ColorSelector = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <div className="flex space-x-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className={`w-8 h-8 rounded-full border-4 transition-all duration-200 shadow-sm hover:scale-110 ${
            selectedColor === color ? 'border-amber-600 scale-110' : 'border-stone-300'
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

// ================================
// COMPONENTE SELECTOR DE TALLA
// ================================
const SizeSelector = ({ sizes, selectedSize, onSizeSelect }) => {
  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeSelect(size)}
          className={`px-3 py-2 border-2 rounded-xl font-medium transition-all duration-200 ${
            selectedSize === size
              ? 'border-stone-800 bg-stone-800 text-white'
              : 'border-stone-300 text-stone-700 hover:border-amber-600 hover:text-amber-700'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

// ================================
// COMPONENTE SELECTOR DE MATERIAL
// ================================
const MaterialSelector = ({product, materials, selectedMaterial, onMaterialSelect }) => {
  return (
    <select
      value={selectedMaterial}
      onChange={(e) => onMaterialSelect(e.target.value)}
      className="w-full p-3 border-2 text-stone-800 border-stone-300 rounded-xl focus:border-amber-600 focus:outline-none transition-colors duration-200 bg-white/50 backdrop-blur-sm"
    >
      {materials.map((material) => {
        const price = getProductPrice(product, material);
        return (
        <option key={material} value={material}>
          {material} - ${price}
        </option>);
      })}
    </select>
  );
};

// ================================
// COMPONENTE ACCIONES DEL PRODUCTO
// ================================
const ProductActions = ({ 
  product, 
  selectedColor, 
  selectedSize, 
  selectedMaterial, 
  onAddToCart, 
  texts,
  currentPrice 
}) => {
  const handleTikTokClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-amber-700">${currentPrice}</span>
        {product.materialPrices && (
          <span className='text-xs text-stone-500'>Precio varía según material</span>
        )}
      </div>
      
      {product.tiktokUrl && (
      <button
        onClick={() => handleTikTokClick(product.tiktokUrl)}
        className="w-full bg-black text-white py-2.5 px-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
        <span>Ver en TikTok</span>
      </button>
      )}

      <button
        onClick={() => onAddToCart(product, selectedColor, selectedSize, selectedMaterial, currentPrice)}
        className="w-full bg-stone-800 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        disabled={currentPrice === 0}
      >
        {currentPrice === 0 ? 'No disponible' : texts.products.addToCart}
      </button>
    </div>
  );
};

// ================================
// COMPONENTE SECCIÓN DE PRODUCTOS
// ================================
const ProductsSection = ({ 
  filteredProducts, 
  selectedFilters, 
  setSelectedFilters, 
  language, 
  texts, 
  onAddToCart 
}) => {
  return (
    <section id="products" className="py-20 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            {texts.products.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-stone-600 mx-auto rounded-full"></div>
        </div>

        <ProductFilters 
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          texts={texts}
        />

        <ProductGrid 
          products={filteredProducts}
          language={language}
          texts={texts}
          onAddToCart={onAddToCart}
        />
      </div>
    </section>
  );
};

// ================================
// COMPONENTE GRILLA DE PRODUCTOS
// ================================
const ProductGrid = ({ products, language, texts, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          language={language}
          texts={texts}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

// ================================
// COMPONENTE MODAL DEL CARRITO
// ================================
const CartModal = ({ 
  isOpen, 
  onClose, 
  cart, 
  updateQuantity, 
  removeFromCart, 
  getTotalPrice, 
  openWhatsApp, 
  language, 
  texts 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#E2D7C5]/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300">
        <CartHeader onClose={onClose} texts={texts} />
        
        <CartContent 
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          language={language}
          texts={texts}
        />

        {cart.length > 0 && (
          <CartFooter 
            getTotalPrice={getTotalPrice}
            openWhatsApp={openWhatsApp}
            texts={texts}
          />
        )}
      </div>
    </div>
  );
};

// ================================
// COMPONENTE HEADER DEL CARRITO
// ================================
const CartHeader = ({ onClose, texts }) => {
  return (
    <div className="flex items-center justify-between p-6 bg-stone-800 text-white">
      <h2 className="text-xl font-semibold">{texts.cart.title}</h2>
      <button
        onClick={onClose}
        className="text-white hover:text-amber-300 transition-colors duration-300"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

// ================================
// COMPONENTE CONTENIDO DEL CARRITO
// ================================
const CartContent = ({ cart, updateQuantity, removeFromCart, language, texts }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {cart.length === 0 ? (
        <p className="text-center text-stone-600 py-8">{texts.cart.empty}</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              language={language}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ================================
// COMPONENTE ITEM DEL CARRITO
// ================================
const CartItem = ({ item, updateQuantity, removeFromCart, language }) => {
  const itemPrice = item.priceAtTime || getProductPrice(item.product, item.material);
  const totalItemPrice = itemPrice * item.quantity;

  return (
    <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-stone-200/50">
      <div className="w-16 h-16 bg-stone-800 rounded-xl flex items-center justify-center text-white text-xs font-bold text-center">
        {item.product.phrase.substring(0, 10)}...
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-stone-900 truncate">
          {item.product.name[language]}
        </h3>
        <p className="text-sm text-stone-600">
          {item.size} • {item.material}
        </p>

        <p className='text-xs text-amber-600 font-medium'>
          ${itemPrice} c/u
        </p>
        
        <QuantityControls 
          quantity={item.quantity}
          onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
          onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
        />
      </div>
      
      <div className="text-right">
        <p className="font-bold text-amber-700">
          ${totalItemPrice}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:text-red-800 text-sm transition-colors duration-200"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

// ================================
// COMPONENTE CONTROLES DE CANTIDAD
// ================================
const QuantityControls = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center space-x-2 mt-2">
      <button
        onClick={onDecrease}
        className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center transition-colors duration-200"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="px-3 py-1 bg-white border border-stone-300 rounded-md font-medium">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center transition-colors duration-200"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

// ================================
// COMPONENTE FOOTER DEL CARRITO
// ================================
const CartFooter = ({ getTotalPrice, openWhatsApp, texts }) => {
  return (
    <div className="border-t border-stone-300/50 p-6 bg-stone-200/50">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-stone-800">{texts.cart.total}</span>
        <span className="text-2xl font-bold text-amber-700">${getTotalPrice()}</span>
      </div>
      <WhatsAppButton onClick={openWhatsApp} texts={texts} />
    </div>
  );
};

// ================================
// COMPONENTE BOTÓN WHATSAPP
// ================================
const WhatsAppButton = ({ onClick, texts }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
      </svg>
      <span>{texts.cart.whatsapp}</span>
    </button>
  );
};

// ================================
// COMPONENTE PRINCIPAL
// ================================
const NicaragauEcommerce = () => {
  const [language, setLanguage] = useState('es');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    style: 'all',
    color: 'all',
    material: 'all'
  });

  // Textos multiidioma
  const texts = {
    es: {
      brand: '@solitonica',
      hero: {
        title: 'Camisas únicas de Nicaragua',
        subtitle: 'Expresa tu orgullo nicaragüense con frases auténticas y diseños exclusivos',
        cta: 'Ver Colección'
      },
      nav: {
        products: 'Productos',
        cart: 'Carrito'
      },
      products: {
        title: 'Nuestra Colección',
        filters: {
          all: 'Todos',
          casual: 'Casual',
          patriotic: 'Dichos',
          humor: 'Humor',
          christian: 'Cristianas'
        },
        addToCart: 'Agregar al Carrito',
        color: 'Color:',
        size: 'Talla:',
        material: 'Material:'
      },
      cart: {
        title: 'Tu Carrito',
        empty: 'Tu carrito está vacío',
        total: 'Total:',
        whatsapp: 'Ordenar por WhatsApp',
        quantity: 'Cantidad'
      }
    },
    en: {
      brand: '@solitonica',
      hero: {
        title: 'Unique Nicaraguan T-Shirts',
        subtitle: 'Express your Nicaraguan pride with authentic phrases and exclusive designs',
        cta: 'View Collection'
      },
      nav: {
        products: 'Products',
        cart: 'Cart'
      },
      products: {
        title: 'Our Collection',
        filters: {
          all: 'All',
          casual: 'Casual',
          patriotic: 'Sayings',
          humor: 'Humor',
          christian: 'Christian'
        },
        addToCart: 'Add to Cart',
        color: 'Color:',
        size: 'Size:',
        material: 'Material:'
      },
      cart: {
        title: 'Your Cart',
        empty: 'Your cart is empty',
        total: 'Total:',
        whatsapp: 'Order via WhatsApp',
        quantity: 'Quantity'
      }
    }
  };

  const currentTexts = texts[language];

  // Productos de ejemplo
  const products = [
    {
      id: 1,
      name: { es: 'Chiva esa nota', en: 'Chiva esa nota' },
      phrase: 'Chiva esa nota',
      description: { es: 'Frase clásica nicaragüense', en: 'Classic Nicaraguan phrase' },
      baseprice: 15,
      category: 'patriotic',
      colors: ['#FFFFFF', '#000000'],
      sizes: ['S', 'M', 'L'],
      materials: ['Algodón', 'Poliéster'],
      materialPrices: {
        'Algodón': 10,
        'Poliéster': 14,
      },
      image: '/images/t-shirt/camisa-blanca-letras-negras-chiva-esa-nota-solitonica-nicaragua.png',
      // Opcional: diferentes imágenes por color
      colorImages: {
        '#FFFFFF': '/images/t-shirt/camisa-blanca-letras-negras-chiva-esa-nota-solitonica-nicaragua.png',
        '#000000': '/images/t-shirt/camisa-negra-letras-blancas-chiva-esa-nota-solitonica-nicaragua.png',
      },
      tiktokUrl: 'https://www.tiktok.com/@solitonica/video/7554485899367615766'
    },
    {
      id: 2,
      name: { es: '✨ @solitonica', en: '✨ @solitonica'},
      phrase: 'Classic',
      description: { es: 'Camisa Clasica', en: 'Classic Shirt' },
      baseprice: 0,
      category: 'patriotic',
      colors: ['#FFFFFF', '#000000'],
      sizes: ['S', 'M', 'L'],
      materials: ['Algodón', 'Poliéster'],
      materialPrices: {
        'Algodón': 10,
        'Poliéster': 14, 
      },
      image: '/images/t-shirt/camisa-blanca-letras-negras-logo-solitonica-nicaragua.png',
      colorImages: {
        '#FFFFFF': '/images/t-shirt/camisa-blanca-letras-negras-logo-solitonica-nicaragua.png',
        '#000000': '/images/t-shirt/camisa-negra-letras-blancas-logo-solitonica-nicaragua.png',
      },
      tiktokUrl: 'https://www.tiktok.com/@solitonica/video/7554496630829976854'
    },
    {
      id: 3,
      name: { es: '✨Isaías 4:31', en: '✨Isaiah 4:31'},
      phrase: 'JESÚS',
      description: { es: 'Mensajes cristianos overside', en: 'Christian messages overside' },
      baseprice: 20,
      category: 'christian',
      colors: ['#000000'],
      sizes: ['S', 'M'],
      materials: ['Algodón'],
      materialPrices: {
        'Algodón': 20
      },
      image: '/images/t-shirt/Christian/camisa-negra-letras-blancas-overside-frase-isaías-4:31-solitonica-nicaragua.png',
      tiktokUrl: 'https://www.tiktok.com/@solitonica/video/7552257568106679574'
    },
    {
      id: 4,
      name: { es: '✨Al chile', en: '✨Al chile'},
      phrase: 'AL CHILE',
      description: { es: 'Frase clásica nicaragüense', en: 'Classic Nicaraguan phrase' },
      baseprice: 20,
      category: 'patriotic',
      colors: ['#FFFFFF'],
      sizes: ['S', 'M'],
      materials: ['Algodón'],
      materialPrices: {
        'Algodón': 10
      },
      image: '/images/t-shirt/camisa-blanca-letras-negras-al-chile-solitonica-nicaragua.png',
      tiktokUrl: 'https://www.tiktok.com/@solitonica/video/7554245423259520278'
    },
    {
      id: 5,
      name: { es: '✨ Próximamente', en: '✨ Coming soon' },
      phrase: '✨✨✨✨✨',
      description: { es: 'Diseño minimalista', en: 'Minimalist design' },
      baseprice: 0,
      category: 'casual',
      colors: ['#FFFFFF', '#003366', '#000000', '#2E7D32'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['Algodón', 'Algodón Premium', 'Blend'],
      materialPrices: {
        'Algodón': 0,
        'Algodón Premium': 0,
        'Blend': 0
      }
    }
  ];

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    if (selectedFilters.style !== 'all' && product.category !== selectedFilters.style) {
      return false;
    }
    return true;
  });

  // Funciones del carrito
  const addToCart = (product, selectedColor, selectedSize, selectedMaterial, currentPrice) => {
    const cartItem = {
      id: `${product.id}-${selectedColor}-${selectedSize}-${selectedMaterial}`,
      product: {
        ...product,
        currentPrice: currentPrice // Llama al precio actual en el momento de agregar el carrito
      },
      color: selectedColor,
      size: selectedSize,
      material: selectedMaterial,
      quantity: 1,
      priceAtTime: currentPrice // Precio fijo en el momento de agregar al carrito
    };

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === cartItem.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, cartItem];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      // Usar el precio que se guardo en el momento de agregar al carrito
      const itemPrice = item.priceAtTime || getProductPrice(item.product, item.material);
      return total + (itemPrice * item.quantity);
    }, 0);
  };

// ================================
// CONFIGURACIÓN DE REDES SOCIALES
// ================================
const socialMediaLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61578830631897",
  instagram: "https://www.instagram.com/solitonica.ni/",
  tiktok: "https://www.tiktok.com/@solitonica",
  drunic: "https://drunic.com" //
};

// ================================
// COMPONENTE FOOTER MEJORADO
// ================================
const Footer = ({ texts }) => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Información de la marca */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                <Image
                    src={'/images/logo.png'}
                    alt='logo'
                    width={58}
                    height={58}
                  />
              </div>
              <h3 className="text-xl font-bold text-white">{texts.brand}</h3>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              {texts.hero.subtitle}
            </p>
            <div className="flex items-center space-x-2 text-amber-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16l-5.29 5.29c-.394.394-.902.59-1.408.59s-1.014-.196-1.408-.59l-2.69-2.69c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l1.28 1.28 3.88-3.88c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83z"/>
              </svg>
              <span className="text-sm">Nicaragua 🇳🇮</span>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                </svg>
                <a href="https://wa.me/+50557517432" className="text-stone-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  WhatsApp: +505 5751 7432
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:solitonica.ni@gmail.com" className="text-stone-300 hover:text-amber-400 transition-colors duration-300 text-sm">
                  solitonica.ni@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Síguenos</h4>
            <p className="text-stone-300 text-sm">
              Mantente conectado para ver nuestros nuevos diseños
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a 
                href={socialMediaLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group transform hover:scale-110"
                aria-label="Síguenos en Facebook"
              >
                <Facebook />
              </a>

              {/* Instagram */}
              <a 
                href={socialMediaLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group transform hover:scale-110"
                aria-label="Síguenos en Instagram"
              >
                <Instagram />
              </a>

              {/* TikTok */}
              <a 
                href={socialMediaLinks.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 group transform hover:scale-110"
                aria-label="Síguenos en TikTok"
              >
                <svg className="w-5 h-5 text-stone-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Derechos de autor */}
            <div className="text-stone-400 text-sm">
              © 2024 {texts.brand}. Todos los derechos reservados.
            </div>

            {/* Créditos de desarrollo */}
            <div className="flex items-center space-x-3">
              <span className="text-stone-400 text-sm">Desarrollado por</span>
              <a 
                href={socialMediaLinks.drunic}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-stone-800 px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-600 transition-all duration-300 group transform hover:scale-105"
              >
                {/* Logo de Drunic - puedes reemplazar con imagen real */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/drunic-logo.png"
                    alt="Drunic Logo"
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                <span className="text-stone-300 group-hover:text-white text-sm font-semibold transition-colors duration-300">
                  Drunic Software
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mensaje adicional */}
        <div className="mt-6 text-center">
          <p className="text-stone-500 text-xs">
            🇳🇮 Hecho con amor en Nicaragua para nicaragüenses en el mundo 🇳🇮
          </p>
        </div>
      </div>
    </footer>
  );
};

// ================================
// FUNCIÓN PARA CONVERTIR CÓDIGOS DE COLOR A NOMBRES
// ================================
const getColorName = (colorCode, language = 'es') => {
  const colorNames = {
    '#FFFFFF': {
      es: 'Blanco',
      en: 'White'
    },
    '#000000': {
      es: 'Negro',
      en: 'Black'
    },
    '#003366': {
      es: 'Azul Marino',
      en: 'Navy Blue'
    },
    '#2E7D32': {
      es: 'Verde',
      en: 'Green'
    },
    '#FF0000': {
      es: 'Rojo',
      en: 'Red'
    },
    '#808080': {
      es: 'Gris',
      en: 'Gray'
    },
    '#FFFF00': {
      es: 'Amarillo',
      en: 'Yellow'
    },
    '#FFA500': {
      es: 'Naranja',
      en: 'Orange'
    },
    '#800080': {
      es: 'Morado',
      en: 'Purple'
    },
    '#FFC0CB': {
      es: 'Rosa',
      en: 'Pink'
    }
  };

  // Si encontramos el color en nuestro mapeo, devolver el nombre
  if (colorNames[colorCode] && colorNames[colorCode][language]) {
    return colorNames[colorCode][language];
  }

  // Si no encontramos el color, devolver el código como fallback
  return colorCode;
};

  // Funcion para generar mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    const message = cart.map(item => {
      const productName = item.product.name[language];
      const itemPrice = item.priceAtTime || getProductPrice(item.product, item.material);
      const totalItemPrice = itemPrice * item.quantity

      // Convertir codigo de color a nombre legible
      const colorName = getColorName(item.color, language);

      return `• ${productName} - Talla: ${item.size}, Color: ${colorName}, Material: ${item.material}, Cantidad: ${item.quantity} - $${totalItemPrice}`;
    }).join('\n');

    const total = getTotalPrice();
    const fullMessage = `¡Hola! Quiero hacer el siguiente pedido:\n\n${message}\n\n*Total: ${total}*\n\n¡Gracias!`;
    
    return encodeURIComponent(fullMessage);
  };

  const openWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = '+50557517432';
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <main>
      <div className='bg-[#E2D7C5] min-h-screen'>
        {/* Fixed Header */}
        <Header 
          language={language}
          setLanguage={setLanguage}
          cart={cart}
          setIsCartOpen={setIsCartOpen}
          texts={currentTexts}
        />

        {/* Hero Section */}
        <HeroSection texts={currentTexts} />

        {/* Products Section */}
        <ProductsSection 
          filteredProducts={filteredProducts}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          language={language}
          texts={currentTexts}
          onAddToCart={addToCart}
        />

        {/* Cart Modal */}
        <CartModal 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          getTotalPrice={getTotalPrice}
          openWhatsApp={openWhatsApp}
          language={language}
          texts={currentTexts}
        />
      </div>

      {/* Footer */}
      <Footer texts={currentTexts} />

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-300% {
          background-size: 300%;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </main>
  );
};

export default NicaragauEcommerce;