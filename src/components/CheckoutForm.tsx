
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { CreditCard, Banknote, Smartphone, Building, Shield, Lock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
  bankAccount: string;
  bankRouting: string;
  upiId: string;
  specialRequests: string;
}

const CheckoutForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const form = useForm<CheckoutFormData>({
    defaultValues: {
      paymentMethod: 'card',
      country: 'IN'
    }
  });

  const paymentMethod = form.watch('paymentMethod');

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    toast({
      title: "Payment Processed Successfully!",
      description: "Your inquiry has been submitted and payment details verified. Our team will contact you within 24 hours.",
    });
    
    form.reset();
    setIsProcessing(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="luxury-text-gradient">Secure Checkout</span>
        </h1>
        <p className="text-muted-foreground">
          Complete your supercar inquiry with our secure payment system
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-luxury-gold" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    rules={{ required: "First name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    rules={{ required: "Last name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Billing Address */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="address"
                  rules={{ required: "Address is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main Street" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    rules={{ required: "City is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Mumbai" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    rules={{ required: "State is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Maharashtra" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="zipCode"
                    rules={{ required: "ZIP code is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="400001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="IN">India</SelectItem>
                            <SelectItem value="US">United States</SelectItem>
                            <SelectItem value="UK">United Kingdom</SelectItem>
                            <SelectItem value="AE">UAE</SelectItem>
                            <SelectItem value="SG">Singapore</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-luxury-gold" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                            <CreditCard className="w-4 h-4" />
                            Credit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer">
                            <Building className="w-4 h-4" />
                            Bank Transfer
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                            <Smartphone className="w-4 h-4" />
                            UPI
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer">
                          <RadioGroupItem value="cash" id="cash" />
                          <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
                            <Banknote className="w-4 h-4" />
                            Cash/Check
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Credit Card Details */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                  <FormField
                    control={form.control}
                    name="cardHolder"
                    rules={{ required: "Cardholder name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cardholder Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    rules={{ required: "Card number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234 5678 9012 3456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      rules={{ required: "Expiry date is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cvv"
                      rules={{ required: "CVV is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input placeholder="123" type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Bank Transfer Details */}
              {paymentMethod === 'bank' && (
                <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                  <FormField
                    control={form.control}
                    name="bankAccount"
                    rules={{ required: "Account number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bankRouting"
                    rules={{ required: "Routing number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Routing Number / IFSC</FormLabel>
                        <FormControl>
                          <Input placeholder="SBIN0001234" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* UPI Details */}
              {paymentMethod === 'upi' && (
                <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                  <FormField
                    control={form.control}
                    name="upiId"
                    rules={{ required: "UPI ID is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UPI ID</FormLabel>
                        <FormControl>
                          <Input placeholder="john@paytm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Cash/Check Notice */}
              {paymentMethod === 'cash' && (
                <div className="p-4 border rounded-lg bg-muted/20">
                  <p className="text-sm text-muted-foreground">
                    For cash or check payments, our team will coordinate with you during the consultation process. 
                    Payment arrangements will be finalized before vehicle delivery.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Special Requests */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Special Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Requirements or Preferences</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please specify any special requirements, preferred viewing times, or additional services you need..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Consultation Fee</span>
                <span>{formatPrice(50000)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Processing Fee</span>
                <span>{formatPrice(5000)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tax (18% GST)</span>
                <span>{formatPrice(9900)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="luxury-text-gradient">{formatPrice(64900)}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                This fee covers premium consultation services and is fully refundable if no purchase is made within 30 days.
              </p>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={isProcessing}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-12 py-6 rounded-full text-lg min-w-[200px]"
            >
              <Lock className="mr-2 w-5 h-5" />
              {isProcessing ? 'Processing...' : 'Secure Payment'}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              🔒 Your payment information is encrypted and secure
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutForm;
