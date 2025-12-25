import React from 'react';



const Temoignage: React.FC = () => {


  return (
    <section>

      <div>
        <h2 className="text-4xl font-bold text-center mt-15 text-gray-900 mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Découvrez les expériences de ceux qui nous ont fait confiance
        </p>
      </div>
      {/* Ligne 1 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 py-4">
          {/* Première colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              {/* Background effect */}
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Avant l'arrivée des foyers de CIAIVERTES, nous utilisons du bois pour préparer les repas et ,une fois à la maison nous ressentions des douleurs qui nous obligeaient à prendre des édicaments pour soulager ces maux. Depuis que nous utilisons ces foyersn nous cuisinons sans aucun inconfort ”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://ciaivertes.bj/assets/img/testimonials/temoignage.png"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Vendeuse</div>
                      {/*  <div className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-black/50"></div>
                      <div className="text-black/80">CEO of Workcation</div>
                    </div> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Deuxième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl ">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center " />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto  size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Troisième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black-1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Ligne 2 */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 py-4">
          {/* Première colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              {/* Background effect */}
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Avant l'arrivée des foyers de CIAIVERTES, nous utilisons du bois pour préparer les repas et ,une fois à la maison nous ressentions des douleurs qui nous obligeaient à prendre des édicaments pour soulager ces maux. Depuis que nous utilisons ces foyersn nous cuisinons sans aucun inconfort ”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://ciaivertes.bj/assets/img/testimonials/temoignage.png"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Vendeuse</div>
                      {/*  <div className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-black/50"></div>
                      <div className="text-black/80">CEO of Workcation</div>
                    </div> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Deuxième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl ">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center " />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto  size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Troisième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black-1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </section>


      {/* Ligne 3 */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 py-4">
          {/* Première colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              {/* Background effect */}
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Avant l'arrivée des foyers de CIAIVERTES, nous utilisons du bois pour préparer les repas et ,une fois à la maison nous ressentions des douleurs qui nous obligeaient à prendre des édicaments pour soulager ces maux. Depuis que nous utilisons ces foyersn nous cuisinons sans aucun inconfort ”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://ciaivertes.bj/assets/img/testimonials/temoignage.png"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Vendeuse</div>
                      {/*  <div className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-black/50"></div>
                      <div className="text-black/80">CEO of Workcation</div>
                    </div> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Deuxième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl ">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center " />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto  size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Troisième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black-1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </section>


      {/* Ligne 4 */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 py-4">
          {/* Première colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              {/* Background effect */}
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Avant l'arrivée des foyers de CIAIVERTES, nous utilisons du bois pour préparer les repas et ,une fois à la maison nous ressentions des douleurs qui nous obligeaient à prendre des édicaments pour soulager ces maux. Depuis que nous utilisons ces foyersn nous cuisinons sans aucun inconfort ”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://ciaivertes.bj/assets/img/testimonials/temoignage.png"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Vendeuse</div>
                      {/*  <div className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-black/50"></div>
                      <div className="text-black/80">CEO of Workcation</div>
                    </div> */}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Deuxième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl ">
            <section className="relative isolate overflow-hidden bg-black/1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center " />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto  size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>

          {/* Troisième colonne */}
          <div className="md:col-span-1 border-r-4 border-gray-200 rounded-2xl">
            <section className="relative isolate overflow-hidden bg-black-1 px-6 py-12 sm:py-16 lg:px-6 mb-6">
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#1d5d43]/70 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center border-r-4 border-gray-200 rounded-2xl" />

              <div className="mx-auto max-w-md lg:max-w-lg">
                <figure className="space-y-6">
                  <blockquote className="text-center text-lg font-semibold text-black sm:text-xl">
                    <p className="italic">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>

                  <figcaption className="space-y-4">
                    <img
                      alt="Judith Black"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto size-28 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1 text-base">
                      <div className="font-semibold text-black">Judith Black</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-1 w-1 rounded-full bg-black/50"></div>
                        <div className="text-black/80">CEO of Workcation</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </section>


    </section>
  );
};

export default Temoignage;