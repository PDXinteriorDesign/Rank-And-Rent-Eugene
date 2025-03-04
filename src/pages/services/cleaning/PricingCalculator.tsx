
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const PricingCalculator = () => {
  const [roofSize, setRoofSize] = useState('');
  const [roofType, setRoofType] = useState('');
  const [mossLevel, setMossLevel] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculatePrice = () => {
    let basePrice = 0;
    
    // Base price by roof size
    switch (roofSize) {
      case 'small': basePrice = 300; break;
      case 'medium': basePrice = 500; break;
      case 'large': basePrice = 800; break;
      case 'xlarge': basePrice = 1200; break;
    }

    // Adjustments for roof type
    const typeMultiplier = {
      'asphalt': 1,
      'metal': 1.2,
      'tile': 1.5,
      'cedar': 1.3
    }[roofType] || 1;

    // Adjustments for moss level
    const mossMultiplier = {
      'light': 1,
      'moderate': 1.3,
      'heavy': 1.6
    }[mossLevel] || 1;

    const finalEstimate = basePrice * typeMultiplier * mossMultiplier;
    setEstimate(Math.round(finalEstimate));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Roof Cleaning Cost Calculator</h2>
          <p className="text-gray-600 text-center mb-12">
            Get an instant estimate for your roof cleaning service. Final price may vary based on 
            inspection and specific requirements.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="size">Roof Size</Label>
                  <Select value={roofSize} onValueChange={setRoofSize}>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select roof size" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-md">
                      <SelectItem value="small">Small (Up to 1,500 sq ft)</SelectItem>
                      <SelectItem value="medium">Medium (1,500-2,500 sq ft)</SelectItem>
                      <SelectItem value="large">Large (2,500-3,500 sq ft)</SelectItem>
                      <SelectItem value="xlarge">Extra Large (3,500+ sq ft)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="type">Roof Type</Label>
                  <Select value={roofType} onValueChange={setRoofType}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select roof type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-md">
                      <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                      <SelectItem value="metal">Metal Roof</SelectItem>
                      <SelectItem value="tile">Tile Roof</SelectItem>
                      <SelectItem value="cedar">Cedar Shake</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="moss">Moss/Algae Level</Label>
                  <Select value={mossLevel} onValueChange={setMossLevel}>
                    <SelectTrigger id="moss">
                      <SelectValue placeholder="Select moss level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-md">
                      <SelectItem value="light">Light (Visible but minimal)</SelectItem>
                      <SelectItem value="moderate">Moderate (Noticeable patches)</SelectItem>
                      <SelectItem value="heavy">Heavy (Significant coverage)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full"
                  onClick={calculatePrice}
                  disabled={!roofSize || !roofType || !mossLevel}
                >
                  <Calculator className="mr-2" />
                  Calculate Estimate
                </Button>
              </div>
            </CardContent>
          </Card>

          {estimate !== null && (
            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Estimated Cost</h3>
                <p className="text-3xl font-bold text-secondary">${estimate}</p>
                <p className="text-sm text-gray-600 mt-2">
                  This is an approximate estimate. Contact us for a detailed quote.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
