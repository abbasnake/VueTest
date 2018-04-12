Apstākļi un citi attaisnojumi.

Īsi runājot - šoreiz pietrūka laika, kas, visticamāk, liecina par vēl pārāk daudz trūkumiem. Ja nav slinkums, var uzmest aci kodam, bet nevēlos, lai kāds lieki tērē laiku. Visticamāk pieteikšos atkal pēc kādiem 2 mēnešiem.

Ja tās acis met, tad lai vieglāk, jo kods nav komentēts - Servera puses kods ir NodeJS, iemesls tam ir mans pieradums pie tā. Vēlējos izdarīt tur, kur zināju, ka varu, tad pārtulkot uz PHP. Klienta pusē lietoju Vue instalējot to ar 'vue init webpack' komandu, tam klāt piemetu vue-router un vuex. Nedz servera puse, nedz klienta puse nav pabeigtas, bet darbojās. Ieejot client folderī ar termināli var spiest 'npm start' un viss notiks, gan ar testiem saglabātiem turpatās. Ja gribās caur NodeJS, tad to arī var tikai jāatkomentē 11. rinda iekš client/src/App.vue (this.fetchTests()) un 13. rinda iekš client/store/store.js (tests: {}), un, savukārt, tā paša faila 12. un 3. rinda jākomentē ciet, tad 'npm start' komanda gan iekš server foldera, gan client foldera un visam vajadzētu ripot.

Domāju, ka palikšu pie šī projekta, lai piebeigtu kā nākas, kaut vai lai Vue dabūtu sistēmā un treniņš.

Paldies par iespēju.