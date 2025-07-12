import React from "react";
import ScrollReveal from "./ScrollReveal";

const ScrollRevealDemo = () => {
  return (
    <div className="w-full space-y-12 p-6 bg-background min-h-screen">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
            Scroll Reveal Animation
          </span>
        </div>
        <ScrollReveal size="6xl" align="center" variant="default" staggerDelay={0.08}>
          Scroll Reveal Component
        </ScrollReveal>
        <ScrollReveal size="xl" align="center" variant="muted" staggerDelay={0.05}>
          Smooth scroll-triggered text animations with rotation, blur effects, and stagger animations.
          Scroll down to see the effects in action.
        </ScrollReveal>
      </div>

      {/* Basic Example */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Basic Scroll Reveal</h3>
          <p className="text-gray-600 mt-2">
            Simple text animation that reveals words as you scroll
          </p>
        </div>
        <div className="p-6 space-y-8">
          <ScrollReveal>
            Transform your user experience with beautiful scroll-triggered animations that bring content to life as users navigate through your website.
          </ScrollReveal>
        </div>
      </div>

      {/* Size Variants */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Size Variants</h3>
          <p className="text-gray-600 mt-2">
            Different text sizes with responsive scaling
          </p>
        </div>
        <div className="p-6 space-y-12">
          <ScrollReveal size="sm">
            Small text with subtle animation effects
          </ScrollReveal>
          
          <ScrollReveal size="md">
            Medium-sized text perfect for descriptions
          </ScrollReveal>
          
          <ScrollReveal size="lg">
            Large headings that command attention
          </ScrollReveal>
          
          <ScrollReveal size="xl">
            Extra large for hero sections
          </ScrollReveal>
        </div>
      </div>

      {/* Alignment Options */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Text Alignment</h3>
          <p className="text-gray-600 mt-2">
            Control text alignment for different layouts
          </p>
        </div>
        <div className="p-6 space-y-12">
          <ScrollReveal align="left">
            Left-aligned text flows naturally for most content types and reading patterns.
          </ScrollReveal>
          
          <ScrollReveal align="center">
            Centered text creates focus and draws attention to important messages.
          </ScrollReveal>
          
          <ScrollReveal align="right">
            Right-aligned text can create interesting visual balance in your designs.
          </ScrollReveal>
        </div>
      </div>

      {/* Word Spacing Options */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Word Spacing</h3>
          <p className="text-gray-600 mt-2">
            Control the spacing between words for better readability
          </p>
        </div>
        <div className="p-6 space-y-12">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">Tight Spacing</h4>
            <ScrollReveal wordSpacing="tight">
              Compact text with minimal spacing between words for dense content layouts.
            </ScrollReveal>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">Normal Spacing</h4>
            <ScrollReveal wordSpacing="normal">
              Standard spacing that provides comfortable reading experience for most content.
            </ScrollReveal>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">Wide Spacing</h4>
            <ScrollReveal wordSpacing="wide">
              Generous spacing between words for emphasis and visual breathing room.
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Color Variants */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Color Variants</h3>
          <p className="text-gray-600 mt-2">
            Different color schemes for various contexts
          </p>
        </div>
        <div className="p-6 space-y-12">
          <ScrollReveal variant="default">
            Default foreground color for standard content
          </ScrollReveal>
          
          <ScrollReveal variant="muted">
            Muted colors for secondary information and subtle emphasis
          </ScrollReveal>
          
          <ScrollReveal variant="primary">
            Primary brand colors for important messaging and calls-to-action
          </ScrollReveal>
          
          <ScrollReveal variant="accent">
            Accent colors for highlights and special emphasis
          </ScrollReveal>
        </div>
      </div>

      {/* Animation Settings */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Custom Animation Settings</h3>
          <p className="text-gray-600 mt-2">
            Fine-tune the animation behavior and effects
          </p>
        </div>
        <div className="p-6 space-y-12">
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.05}
            baseRotation={5}
            blurStrength={6}
            staggerDelay={0.1}
          >
            Heavy blur and rotation effects with slow stagger timing
          </ScrollReveal>
          
          <ScrollReveal
            enableBlur={false}
            baseOpacity={0.3}
            baseRotation={1}
            staggerDelay={0.02}
            duration={0.4}
          >
            Quick and snappy animation without blur effects
          </ScrollReveal>
          
          <ScrollReveal
            springConfig={{
              damping: 15,
              stiffness: 200,
              mass: 0.5,
            }}
            staggerDelay={0.08}
          >
            Custom spring physics for bouncy, energetic animations
          </ScrollReveal>
        </div>
      </div>

      {/* Long Content Example */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Long Content Example</h3>
          <p className="text-gray-600 mt-2">
            See how the effect works with longer text content
          </p>
        </div>
        <div className="p-6 space-y-12">
          <ScrollReveal size="md" staggerDelay={0.03}>
            The art of animation lies not just in movement, but in the emotion it evokes. 
            Every transition tells a story, every fade speaks to the soul, and every 
            reveal moment creates a connection between the user and the content. When we 
            craft these experiences thoughtfully, we transform simple text into powerful 
            narratives that guide users through their journey with grace and intention.
          </ScrollReveal>
          
          <ScrollReveal 
            size="lg" 
            align="center"
            variant="primary"
            enableBlur={true}
            baseRotation={2}
          >
            Creating memorable digital experiences through motion
          </ScrollReveal>
          
          <ScrollReveal size="md" staggerDelay={0.05}>
            Web animation has evolved from simple decorative elements to essential 
            components of user experience design. Today's users expect interfaces 
            that respond to their actions with fluidity and personality. The scroll 
            reveal effect bridges the gap between static content and dynamic storytelling, 
            creating moments of delight that keep users engaged and encourage exploration.
          </ScrollReveal>
        </div>
      </div>

      {/* Technical Details */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Technical Features</h3>
          <p className="text-gray-600 mt-2">
            Built with performance and accessibility in mind
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Animation Features:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Framer Motion powered animations</li>
                <li>• Scroll-triggered visibility detection</li>
                <li>• Word-by-word stagger effects</li>
                <li>• Rotation and blur animations</li>
                <li>• Customizable spring physics</li>
                <li>• Responsive text sizing</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Performance:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• GPU-accelerated transforms</li>
                <li>• Optimized re-renders</li>
                <li>• Intersection Observer API</li>
                <li>• Memory-efficient cleanup</li>
                <li>• Smooth 60fps animations</li>
                <li>• Mobile-optimized performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for scrolling */}
      <div className="h-96 flex items-center justify-center">
        <p className="text-gray-500 text-center">
          Scroll back up to see the animations again
        </p>
      </div>
    </div>
  );
};

export default ScrollRevealDemo; 