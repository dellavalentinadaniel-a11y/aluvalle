import React from 'react';
import Products from '../components/Products';
import TraditionalLine from '../components/TraditionalLine';
import CarpentrySystems from '../components/CarpentrySystems';
import GlazedFacades from '../components/GlazedFacades';
import IndustrialProfiles from '../components/IndustrialProfiles';

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <Products />
      <TraditionalLine />
      <CarpentrySystems />
      <GlazedFacades />
      <IndustrialProfiles />
    </div>
  );
}
