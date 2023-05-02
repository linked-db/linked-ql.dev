export default function( event, data, next ) {
    if ( next.pathname && next.stepname !== 'about' ) return next();
    return {
        title: next.stepname === 'about' ? 'About - Hello World!' : 'Home - Hello World!',
    };
}