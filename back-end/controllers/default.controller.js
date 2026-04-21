
// ─────────────────────────────────────────
// Default controller
// ─────────────────────────────────────────
exports.checkServerIsWorking = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Server is working..."
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error..!",
      error: error.message
    })
  }
}