import {Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@stack/radix-components'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronRight } from 'lucide-react'


const meta: Meta<typeof Carousel > = {
  title: 'Radix Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: args => (
    <div className='px-10'>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    </div>
  )
}
