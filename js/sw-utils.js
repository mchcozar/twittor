
function actualizaCacheDinamico( dynamicCache, req, res ) {

  if ( res.ok ) {

    return caches.open( dynamicCache ).then( cache => {

      if(!req.url.startsWith('http')){
        cache.put( req, res.clone() )
      }
      return res.clone()

    })
  } else {

    return res

  }
}