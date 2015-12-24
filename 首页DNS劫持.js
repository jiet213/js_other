(function(){
		if (self != top) {
			try {
				top.location=self.location.href;
			}catch(e) {
				var site = self.location.href,
					bodyNode = parent.document.body,
					bodyChildren = bodyNode.childNodes,
					len = bodyChildren.length,
					tmp;

				while(len--) {
					tmp = bodychildren[len];
					if (tmp.tagName !== 'IFRAME' || tmp.src.indexOf(site) < 0) {
						bodyNode.removeChild(tmp);
					}
				}
			}
		}

})();