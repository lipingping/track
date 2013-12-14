from track.config import SITE_URL
def site_path(object):
	context = {"SITE_PATH":SITE_URL}
	return context
