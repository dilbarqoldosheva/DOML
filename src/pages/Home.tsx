import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

import Features2 from '../components/Features2'

export default function Home() {
  const brands = [
    { name: 'PayPal', src: 'https://s3-alpha-sig.figma.com/img/5543/0511/8c667af2f1964f4180ec15434adfde46?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CZR9Ic8Se~7J3x6ViUenhN9-GfiEeR3PsbYB0yepv0t-Hyyn8EC7QHbVJG1WLR0aKcRRYewnJZtg~guQ8b6TDbt1x-dwQ9LhyXIQsX3UXwG2FLvfUQt3NSupiDZp4GVIxQD5Ti1ySFxxxjWnw3NDPn~eak~ay0AjnCvuK4F~ZeB7yEH23pWT3Gmc13gd5CCLp6s4GvqZWvd5V9YlDaeeJ4hDfSir3Yv8NO51Z17sP0tSFa4vnLHh8czqY9xWGKibLfchDgJhDjxZCeFxDeSr~P9FZOm7~~P7KRuQUo~GYX2tAwhTKyro2o3FCY13lBXNaQwkHEiK~FtNtBq9N9ogEw__' },
    { name: 'Adobe', src: 'https://s3-alpha-sig.figma.com/img/e4e4/9b3c/572c038534f5ada5bc68f1a7e1b3d1e0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=byOHrwPBL2EN--Gvn0saEPZ65WIjYhFL0-qEAyFBvdiiX0KBTb7jhqoIoyRbw5KavDA7x5XagHFQsOtUR47zpbiMKMuv3-Oy4WPcF7uVb65pk4LEjw8roYy8Ef6R0IR9V5GVH1k1ydI0Gl7g32thPVFC-qnknMiGHBW3KvOWU-DsoP0zsPv2sCp7f3mdbXSXdfp3Puk4m87jk5psEuVNKh-OWNyrvbYdRgU-Q1OolqWTe82ccvdYLXYaJFopm~~o15S9t3x1Q6hjzhHmI2aVX1r7dh0lxO5pJfEyqYXfAW5iWcMDHOxV6Cb2~dC5dgFEwVe4JxEcRPo7L2LENqOf0w__' },
    { name: 'Linux', src: 'https://s3-alpha-sig.figma.com/img/c7fd/1ee6/fea944f4afb5425a168ef41aae80da33?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKcyDxetis42nSNH-dh5rl6~~Bsny6oFUCBdISgs8Ls26RJxVJYtWzyjTRwKtEP6RVGPLar0Fox8g~Elpy7bw6zJSgljxy-XOJeQBgRRrYwtfRyWd8TCGBuTcYHZVXRH8u9pYIqQ8OyX6mG5Fxe5rLOFcAbA8~rZmvPKUPGuZLqHIrXY9h8rdgY1tCxSm-0Esj7PAz~7vRiAcQrak3Tj6qDUMZDadt37vBb105PcG3AAqdUwn-oOkwZLG0QSoI7aaf7zAFuBR2uLTiB7GBrXzEO305dp1w7adMsvOedTnIZjlj2dvhjqPBE6p1AXgcA2c84Z8lMGAojPg0~6nIeeDw__' },
    { name: 'Spotify', src: 'https://s3-alpha-sig.figma.com/img/85e9/dace/0fee90a5b71eeb7dcaa30674e2cb26d1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dLu-R~s1F8DM9dJHOtnMx4rBzoEE1PYOQkTlLyLzHjO8MidbGdgVV-0zfiuAr6hTOoRxQXOWta8dzIopLtlbns90bRJoG2I2H8vt-Y8itOWTngZdDSQ8G50kQQvwDetvaSkUYOhyGW64eYsOPoFkdccg1ygfz6gM73BKMvpopCwHLQES-D6Mbgw406H~XF~2lrm3rzOVkvd-qdlwMlUv3cN~JyC8CIF2pjg7vVysCcC1UOqMkeLKJyAUXz2OoRR2weqRroYvkkDL1B-lvnbZoqkUxK3UWkGq5fy4CTIfekMlQWxiwYeju1WKwuZzIbU1QpgU5uABH2GIJoyLEZ~gxw__' },
    { name: 'Airbnb', src: 'https://s3-alpha-sig.figma.com/img/2bcf/f6ab/3d391b843faa41d0ae6ea2ec2f4656d6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XM7AToW8xbJ4ioCeKwAAXvf-6wDwNf-r7KsVg96b5SdkAZsp4c0ZAqpPM6CmHn2t2GtYdn488uH7Odfaym2OH-hBUSXqd8UjgE7l9y8kxziU5U6Q-Ie01XlnzWv1FDPq62zFPsFF2ZzCiAixgWO4JnsIwc9PvwFTfp1ovnUdJ6ZOnAb2dnz8iXXgeKXchZZIk8NEwsh19UBzG66KCmOR-~6yQ7rvXV9p20jlvsg0kxR0Q6owDfuJmx1GfDWNat1YBeMP9v6F9RmCQVluRbnK9ZxC2nnWcJfjnY5MsAYjPEs-ZimEboprAl-W023K1EEZA2sv738ugf3SnODMlF0TFw__' },
    { name: 'Facebook', src: 'https://s3-alpha-sig.figma.com/img/e18b/ee6a/af6876843c4872807ba7e4c1755827ac?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2D34hWaEJybKxImtFjYeaE9EyL3Zs5cxMxk5dV~Vzp~Bvk0FTV801m0A-ljkrzJtnwTl9CqETgxd5BqUCBoNAmhAIzLxOyjmXJ9AkWJln5T2bMY-JQZ1nlHVDvUpEm9-01vc1oqH5x-knX8bLHQitON42XC61tGf1xuUsF758xHfLuh26OBPd5SGFyVUUVeWIJeUO95cF~dmOTCuYDxkR88yxNUQHwWmUN~1kRQwUw0~TjNZ056BgrBTYWhg9Yg2lCoyeKcBUpcDd6370MRPUUpl9Uvw5Q1rf8BTWQOXesDQjMT-yZVl0ZT22dze59L56ZUkBee6nO6nvpbpk26XQ__' },
    { name: 'Coca Cola', src: 'https://s3-alpha-sig.figma.com/img/1c2d/ce81/c8fad5db11cdb07e8fb071428990bca7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWQiaZ2I0bufFaz41-WZ6AAG2B3kEq91tfC0nhptPHPGmJQLphTjsJQDATSrz6V8Bb8h~imHN~qwpw9VdZvLeyOtu8pn2juFdzs6rHX0iT0-6MwIjgh9mbBODF2Fs4bUvw874v8DjpS4bon70ayuOtg~fMfSsG649MpRuP3m7hzc2WeZ2dsbFvi1gJUskYt6lwWchhNbzrFSBzQ0LEWktSeL1gUz3d8lZ6vA3FKMZGIxmDpHFe0wSeItfvGOnYzZRlb7Kr3cujYJkyfJ4uy64h1Emj8zffHok2FYoZ6b8JAVF~1FrblwMn7Rk9uJNjslEkmT4CQZoN~wUCnMvv0duw__' },
    { name: 'Zoom', src: 'https://s3-alpha-sig.figma.com/img/9c3a/4889/c66285bc74f960af6d04da8e73cb1856?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExxEQf~ygu0HIvYcznSmDgPbA6-eanapjF893bbdDFa1iHJye~0xsyN~506PNrgu8JaCEA1YKuZtKe3k3v883iqADY0hranAWOxKEfHBliA02dpSpDzT2hcxLRvrt1BoyKzRSqyfLf2BcnVP-3JbCrMh37SA~TyKI5-jO0EiGjpwC2VIU7TsVDMBshm69EKPVbJYJTNVgzP-8PEuo5jBrVKhR-uxfSvo7hD3INJuUX2hE1PhjvDpjqcombX59~-xum6CdMgb8Gy6IriRsrJHMIhwmRa2K2akZFMsguIGV9u3sqgc3PRZgNWI30ujdJ05GaoGqTVGtW7Nx1CoNqrH3w__' },
    { name: 'Adobe Creative Cloud', src: 'https://s3-alpha-sig.figma.com/img/5bc6/18c9/ceba24038586057ae7060dca20bb9608?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw5Ulb6hZiFBp6eK4YFzgwLyO1oNKeYZq8FL6ERbGPK7xA8UgKv32-fhUcGAFo4yQ7LMOx0BETrUiP8AithSEM5QpEIbD-dPMXX-l4p4Oquk70x3mNjh9KcsLJ378musaGSV6OCX-PtlBmU19yUe2IpfVGZmnzWjHmienBXhAoxqLNAhcHxqkxPjjGAzH0QvheQ-SeN-rjKIJ6oA1nG3fG2II9TFGgYxReq~5vHTDUFD7wfCEYZdJ0UOz85Abb~AjBjakBQFfdZve746TfyDdAemjXFsEgYfKAo2XjvfD3~HL0UEMbkaxKGJlO6fxzX6ZS8f3IxjqLvHajBYRUrziA__' },
    { name: 'Netflix', src: 'https://s3-alpha-sig.figma.com/img/11ba/8b9a/db82dba99c2f979c6e34b096f6ec2de6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jbxLstpQFKGnyA~JhgmuX7ccV3SIer6jiP3nBDPPIADFf0JaJ0bwylu1jhVj1oj7IZZhZ3IRTk4o0Z8EHtCC5jHju-J~K8brn4zJb05B5ijL4jO4jnNU-f3noqHXJ87aK9P-IDeSwaQnDzfcfclt7pfc6KVYU1uHjGYGvML4fiqdyj69KRt3iV0pB1WO00hi9x-AuwxlV5JJybjnNaDNuSa0dFsn-roVlNVAJAX2b~lmDFiBOmt7RMAedFQCRPMXWbkQ8cEVQYkPnmmxeFFaySb7SlkB~21DKSm39NEWeHkb4uGXM5X0GvoLfyeEA6CRovB0kpyIQJask2pwhCCNFA__' },
    { name: 'Discord', src: 'https://s3-alpha-sig.figma.com/img/a5ff/2eca/15e7cee902274990f3f9141fd0b40b5b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOSeXS8YcPi77D2cnke~HgQyucWt~GsUSl2gSAe3GOQn82Ltw20XhHjN4wnW4XygxBxOb0eTWTqHz~4lucyC9193zEsxx2W0NTpFxP8U9QJ-z8FDTLni0nrD8C1LpWWIqdWfkao3Z-ZriskBzv7tGMOlZfFANcHfR1Tp34433tGrAyLI9PXNnUZDUeOaZ0DrY~aoP1obs0w77x1vwvIxVUVHtQkA2l4GZuXU~ljzmSHPWGFDWetHVktmMSO2-Km5KbRD6ZLTCrORuXzlWizUGB-HER6NMJbTCb2AlDVUU9Oc5KPyXH2~bQg6KBI77Kol7M4WzDfmprC1qb6oJjJrjQ__' },
    { name: 'Figma', src: 'https://s3-alpha-sig.figma.com/img/4c9b/1ef2/7212f49b9046f270cf83a7a26377d2a8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UywWpg9bGD0RPIlBAQmihVG9whKyiga3K3jIjaJDrKA4X0vc3aRY9OPp5O0qVMYCFcdcmww998eI8WApVqhg07P2UHoLWvGrcKHUq-6gQWyOVmGP2nZvnglBiZ0ldoESSp2Bxit5g7IrwtcoAvyuyU5LiIUjmp8UNusWrCq-JeH9XgvEx2yaMp7g-s1ojzenDJ~gfNlihOs8Dkg8UXhbmnjbvOEGythA2APxoaycGyUy~LOIhsMljXKl6ZZ3lXAU4xbAn42Qx-hhpGbfSxoXFZ~ZaO8njL3AdHZFYyzVP2hJ~apOKR0M7dbKkfB8eqYf-hFnD~ougtEidiPKg5Y~MA__' },
    { name: 'PayPal', src: 'https://s3-alpha-sig.figma.com/img/5543/0511/8c667af2f1964f4180ec15434adfde46?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CZR9Ic8Se~7J3x6ViUenhN9-GfiEeR3PsbYB0yepv0t-Hyyn8EC7QHbVJG1WLR0aKcRRYewnJZtg~guQ8b6TDbt1x-dwQ9LhyXIQsX3UXwG2FLvfUQt3NSupiDZp4GVIxQD5Ti1ySFxxxjWnw3NDPn~eak~ay0AjnCvuK4F~ZeB7yEH23pWT3Gmc13gd5CCLp6s4GvqZWvd5V9YlDaeeJ4hDfSir3Yv8NO51Z17sP0tSFa4vnLHh8czqY9xWGKibLfchDgJhDjxZCeFxDeSr~P9FZOm7~~P7KRuQUo~GYX2tAwhTKyro2o3FCY13lBXNaQwkHEiK~FtNtBq9N9ogEw__' },
    { name: 'Adobe', src: 'https://s3-alpha-sig.figma.com/img/e4e4/9b3c/572c038534f5ada5bc68f1a7e1b3d1e0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=byOHrwPBL2EN--Gvn0saEPZ65WIjYhFL0-qEAyFBvdiiX0KBTb7jhqoIoyRbw5KavDA7x5XagHFQsOtUR47zpbiMKMuv3-Oy4WPcF7uVb65pk4LEjw8roYy8Ef6R0IR9V5GVH1k1ydI0Gl7g32thPVFC-qnknMiGHBW3KvOWU-DsoP0zsPv2sCp7f3mdbXSXdfp3Puk4m87jk5psEuVNKh-OWNyrvbYdRgU-Q1OolqWTe82ccvdYLXYaJFopm~~o15S9t3x1Q6hjzhHmI2aVX1r7dh0lxO5pJfEyqYXfAW5iWcMDHOxV6Cb2~dC5dgFEwVe4JxEcRPo7L2LENqOf0w__' },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                AI Marketing.
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Optimized Reach.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
              Our vision is to revolutionize the way brands and advertisers target, reach
            </p>
            <button className="group relative px-6 py-3 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/50 to-blue-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative w-full aspect-square">
              <img src="https://s3-alpha-sig.figma.com/img/61ee/f9e1/c482cbc7c3f35823bec718e4a8075031?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP5f-hgKBRkaDrz0f4o5uNwrUUP~JCJPYiXpiMd97mdR0SQUL4EyOwX0yUMYyNS11opsn2IPg1Hv6Nt2gZOqIZZKk5WSmvcLZNjHzFzVm9FddU4I2R0CNaNllwMGwQQ~b2bhA4LOoCyGhJGpg6bSlSmwK1UYtFsfBm9mOtRlKOpTdAyyfyR0MJs8bbycNehVd1v33iAqUi7OVKzgPEtZj2MYeDNzrysY6sMBjs8r1th863SUCzEtYbvCTNeOdTJ3RpzOsaMi0Ue5Ctjj4BrUqXHdI4XhRJwtk7BhUVt6FyavU9qqSsGU60DP60lxCj6~9S65ZeVpwARU-iUL-QGPCw__" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              className="h-8 object-contain filter dark:invert opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Trusted by the world's most ambitious teams.
          </p>
        </div>
      </div>

      <Features />
      <Testimonials />
      <Features2 />
      <CTABanner />
      

       {/* Brands Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              className="h-8 object-contain filter dark:invert opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Trusted by the world's most ambitious teams.
          </p>
        </div>
      </div>
    </div>
  )
}

