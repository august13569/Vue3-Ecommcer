<template>
  <FrontNavbar />
  <!-- Banner -->
  <header class="header-1 d-flex align-items-center justify-content-center mb-5">
    <div class="text-white text-center w-100"
         style="background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%,
                                  rgba(0, 0, 0, 0) 100%);">
      <h2 class="display-1">About</h2>
    </div>
  </header>
  <!-- Introduction of Our Brand -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="display-1 text-center mb-5">We are founded in 1992</h3>
          <p class="fs-5 lh-base mx-auto" style="max-width: 50em;">
            Established in 1992, our lighting factory has been
            a beacon of innovation and quality craftsmanship for over three decades.
            With a rich history rooted in the artistry of illumination,
            we have consistently set the standard for excellence in the industry.
          </p>
          <p class="fs-5 lh-base mx-auto" style="max-width: 50em;">
            From classic designs to modern creations,
            our diverse collection caters to every style preference.
            Whether you seek grand chandeliers or minimalist sconces,
            our selection epitomizes both quality and design.
            At the core of our offerings
            is a commitment to delivering exceptional products that stand the test of time.
          </p>
          <p class="fs-5 lh-base mx-auto" style="max-width: 50em;">
            Join us on a journey where light transcends function,
            creating ambiance and inspiring emotions.
            Experience the art of illumination with BRITE.
          </p>
        </div>
        <div class="col-12">
          <div class="position-relative mb-5" style="min-height: 75vh;">
            <div class="position-absolute about-1 w-100 h-100"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="position-relative" style="min-height: 75vh;">
            <div class="position-absolute about-2 w-100 h-100"></div>
          </div>
        </div>
        <div class="col-md-6 align-self-center">
          <h3 class="display-5 mb-5">Meticulously Designed</h3>
          <p class="fs-5 lh-base">
            Our lighting fixture factory specializes in crafting meticulously designed pieces that
            blend functionality with exquisite aesthetics.
            Each fixture undergoes a detailed design process,
            ensuring precision and elegance in every aspect.
            From contemporary to classic styles,
            our artisans meticulously create lighting solutions that illuminate spaces
            while adding a touch of sophistication.
            Discover craftsmanship and innovation intersecting seamlessly
            in our diverse range of meticulously designed lighting fixtures.
          </p>
        </div>
      </div>
      <div class="row flex-md-row-reverse mb-5">
        <div class="col-md-6">
          <div class="position-relative" style="min-height: 75vh;">
            <div class="position-absolute about-3 w-100 h-100"></div>
          </div>
        </div>
        <div class="col-md-6 align-self-center">
          <h3 class="display-5 mb-5">Environment Freidly</h3>
          <p class="fs-5 lh-base">
            Committed to sustainability,
            our lighting fixture factory takes pride in producing eco-friendly designs.
            We prioritize the use of energy-efficient materials and processes,
            minimizing environmental impact.
            From energy-saving LED technology to recycled materials,
            our dedication to creating environmentally conscious lighting solutions shines through.
            Choose our products for a harmonious blend of style and environmental responsibility,
            illuminating spaces with a commitment to a greener future.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="display-5 text-center mb-5">Smart Manufacturinig</h3>
          <p class="fs-5 lh-base mx-auto" style="max-width: 50em;">
            At our lighting fixture factory,
            we embrace cutting-edge technology for smart manufacturing.
            Our processes integrate automation, data analytics, and artificial intelligence
            to enhance efficiency and precision.
            From concept to production,
            smart manufacturing ensures streamlined operations,
            reducing waste and optimizing resource utilization.
            Embracing Industry 4.0 principles,
            we deliver innovative and high-quality lighting solutions.
            Experience the future of manufacturing with our smart approach,
            where technology meets craftsmanship to create state-of-the-art lighting fixtures.
          </p>
        </div>
        <div class="col-12">
          <div class="position-relative" style="min-height: 75vh;">
            <div class="position-absolute about-4 w-100 h-100"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
};
</script>
