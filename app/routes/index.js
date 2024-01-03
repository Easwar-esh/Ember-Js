import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    // return {
    //   title: 'Grand Old Mansion',
    //   owner: 'Veruca Salt',
    //   city: 'San Francisco',
    //   location: {
    //     lat: 37.7749,
    //     lng: -122.4194,
    //   },
    //   category: 'Estate',
    //   type: 'Standalone',
    //   bedrooms: 15,
    // };
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();
    console.log(data[0]);
    // let attributes = data[0].attributes;
    // console.log(attributes);
    // let ar = [];
    // ar.push(attributes);
    // return ar;
    console.log(data);
    let arr = data.map((element) => {
      console.log(element);
      let { attributes } = element;
      console.log(attributes);
      return attributes;
    });
    console.log(arr);
    return arr;
  }
}
