const menu = {
  'Home': {
    'text': 'Contribute here',
    'href': 'https://github.com/parthasarathy27/Hacktoberfest2024/blob/master/contributors/contributorsList.js#L1934'
  },'hacktoberfest1':{
'text':'HacktoberFest Project 1',
  'href':'https://github.com/parthasarathy27/Annoying-submit-button'
  
},'hacktoberfest2':{
'text':'HacktoberFest Project 2',
  'href':'https://github.com/parthasarathy27/hacktoberfest'
  
},
  //'Others': {
    'Instagram': {
      'text': 'Instagram Connect',
      'href': ''
    },
    'Instagram': {
      'text': 'Connect on <i class="fa fa-instagram" style="font-size:22px"></i>',
      'href': ''
    },
    'Facebook': {
      'text': '<i class="fa fa-facebook" style="font-size:20px"></i>acebook',
      'href': '',
      'id': 'facebook'
    },
    'Linkedin': {
      'text': 'Linked<i class="fa fa-linkedin" style="font-size:20px"></i>',
      'href': '',
      'id': 'linkedin'
    },
    'NDC': {
      'text': '<i class="fa fa-twitter" style="font-size:20px"></i>Twitter',
      'href': '',
      'id': 'tools'
    },
    'Stars': {
      'text': '<a class="github-button" href="" data-icon="octicon-star" data-show-count="true" aria-label="Star Hacktoberfest2022 on GitHub">Stars</a>',
      'href': '',
      'id': 'tools'
    },
    'Forks': {
      'text': '<a class="github-button" href="" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork Hacktoberfest2022 on GitHub">Fork</a>',
      'href': '',
      'id': 'tools'
    }
    

}

function buildMenuHTML (obj = {}) {
  let html = ''
  let path = window.location.pathname.split('/')
  let currentPage = path[path.length - 1] === '' ? '/' : path[path.length - 1]

  Object.entries(obj).forEach(([key, item]) => {
    if (key == 'Others') {
      html += '<li class="dropdown">'
      html += '<a class="nav-link nested-dropdown" href="#" id="Others"> Others </a>'
      html += '<div class="dropdown-content">'
      Object.entries(item).forEach(([key, item]) => {
        let isCurrent = (currentPage === item.href)

        html += '<div class="nav-item' + (isCurrent ? ' active' : '') + '">'
        html += '<a target="_blank" class="nav-link" href="' + item.href + '"' + (item.id ? ' id="' + item.id + '"' : '') + '>' + item.text + '</a>'
        html += '</div>'
      })
      html += '</div>'
    } else {
      if (currentPage.indexOf('.html') == -1) {
        currentPage = currentPage.concat('.html')
      }

      let isCurrent = (currentPage === item.href)

      html += '<li class="nav-item' + (isCurrent ? ' active' : '') + '">'
      html += '<a target="_blank" class="nav-link" href="' + item.href + '"' + (item.id ? ' id="' + item.id + '"' : '') + '>' + item.text + '</a>'
      html += '</li>'
    }
  })
  document.getElementById('menu').innerHTML = html
}

function buildMenu () {
  buildMenuHTML(menu)
}

buildMenu()
